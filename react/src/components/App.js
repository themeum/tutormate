const { __ } = wp.i18n;
const { useState, useEffect } = wp.element;

import Installation from './Installation';
import RadioField from './RadioField';

let importFiles = tutormate.import_files;
const allCategories = ['all', ...new Set(importFiles.map((item) => item.categories).flat())];
const droipPlugins = builderplugins.droip_plugins;
const elementorPlugins = builderplugins.elementor_plugins;
const gutenbergPlugins = builderplugins.gutenberg_plugins;

function App() {
	const [fetching, setFetching] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const [importCompleted, setImportCompleted] = useState(false);
	const [selectedDemo, setSelectedDemo] = useState(0);
	const [builderList, setBuilderList] = useState([]);
	const [modalState, setModalState] = useState(false);
	const [builder, setBuilder] = useState('droip');
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [listItems, setListItems] = useState(importFiles);
	const [demoNotice, setDemoNotice] = useState('');
	const [categories, setCategories] = useState(allCategories);
	const [pluginInfo, setPluginInfo] = useState({});
	const [plugins, setPlugins] = useState([]);

	// console.log('importFiles ', importFiles);

	useEffect(() => {
		if (importCompleted) {
			bulkImageDownload();
		}
	}, [importCompleted]);

	// Fetch the attachment list from server
	// @since 1.0.4
	const fetchAttachments = async () => {
		let security = tutormate.ajax_nonce;
		let res = await fetch(tutormate.ajax_url + '?action=tutormate_attachments&security=' + security);
		return res.json();
	};

	// @since 1.0.4
	const bulkImageDownload = async () => {
		let promises = [Promise.resolve(1)];
		let security = tutormate.ajax_nonce;
		let base_url = tutormate.ajax_url + '?action=tutormate_download_attachment&security=' + security;

		let res = await fetchAttachments();

		if (res.success) {
			// _thumbnail_id update for each post which related to attachment record
			let update_meta_task = fetch(base_url + '&update_meta=true');
			promises.push(update_meta_task);

			let rows = res.data;
			rows.forEach(function (row) {
				if (row.data.post_type === 'attachment') {
					let target_url = `${base_url}&media_id=${row.data.post_id}`;
					let async_task = fetch(target_url);
					promises.push(async_task);
				}
			});

			console.log(`total attachment: ${rows.length}`);
			console.log('downloading...');

			let already_done = percentage;
			let target_percent = 100 - already_done; // 85
			let current = 0;
			let total_request = promises.length;

			let calculate_percent = () => {
				current++;
				let percent = (target_percent / total_request) * current;
				let completed = Math.round(already_done + percent);
				// console.log(`Status: ${current}/${total_request}`)
				// console.log('completed: ' + completed)
				setPercentage(completed);
			};

			promises.forEach((p) => {
				p.then(() => calculate_percent()).catch(() => calculate_percent());
			});

			Promise.allSettled(promises)
				.then(() => {
					console.log('All downloaded');
					// 85 to 100
					setPercentage(100);
					setImportCompleted(false);
					setTimeout(() => {
						setFetching(false);
						setPercentage(0);
					}, 3000);
				})
				.catch((err) => console.log(err));
		}
	};

	let builderOptions =
		builderList.length > 0 &&
		builderList.map((item) => {
			return { label: item.toUpperCase(), value: item };
		});

	const toggleModalState = () => {
		setModalState(!modalState);
	};

	const filterItems = (category) => {
		if ('all' === category) {
			setListItems(importFiles);
			return;
		}
		const newItems = importFiles.filter((item) => item.categories.includes(category));
		setListItems(newItems);
	};

	const searchResult = (e) => {
		const inputValue = e.target.value.trim().toLowerCase();
		const newItems = importFiles.filter((item) => item.import_file_name.toLowerCase().includes(inputValue));
		setListItems(newItems);
	};

	const getClickedItem = (builders, index, notice) => {
		setSelectedIndex(index);
		setBuilderList(builders);
		setDemoNotice(notice);
		toggleModalState();
	};

	const setBuilderPlugins = (plugins) => {
		useEffect(() => {
			setPlugins(plugins);
		}, []);
	};

	const selectedBuilder = (builder) => {
		setBuilder(builder);
		let builderData = new FormData();
		builderData.append('action', 'tutormate_builder_data');
		builderData.append('security', tutormate.ajax_nonce);
		builderData.append('builder', builder);
		installationAjax(builderData);
	};

	const pluginInstall = async (selected, builder, plugins) => {
		setSelectedDemo(selected);
		setModalState(!modalState);
		setFetching(true);

		let pluginArray =
			plugins.length > 0 &&
			plugins.map((plugin) => {
				return plugin.slug;
			});

		plugins.forEach(({ title, state }) => {
			setPluginInfo((prevInfo) => ({
				...prevInfo,
				[title]: {
					title,
					responseStatus: 'initial',
					pluginState: state,
				},
			}));
		});

		const selectedPlugins = pluginArray;
		let totalPlugins = selectedPlugins.length;
		let increment = Math.ceil(60 / totalPlugins);
		for (let i = 0; i < selectedPlugins.length; i++) {
			const currentPluginName = selectedPlugins[i];
			const currentPlugin = plugins.find((plugin) => plugin.slug === currentPluginName);

			setPluginInfo((prevInfo) => ({
				...prevInfo,
				[currentPlugin.title]: {
					title: currentPlugin.title,
					responseStatus: 'installing',
					pluginState: currentPlugin.state,
				},
			}));

			const res = await installationAjax({
				action: 'tutormate_individual_install_plugins',
				security: tutormate.ajax_nonce,
				selected,
				builder,
				installing: true,
				plugin: currentPluginName,
			});

			const responseData = await res.json();

			if (responseData.status === 'success') {
				setPercentage((val) => {
					val = Math.min(60, val + increment);
					return val;
				});
				setPluginInfo((prevData) => {
					return {
						...prevData,
						[responseData.plugin_name]: {
							title: responseData.plugin_name,
							responseStatus: 'success',
							pluginState: currentPlugin.state,
						},
					};
				});
			} else if (responseData.status === 'error') {
				totalPlugins -= 1;
				increment = Math.ceil(60 / totalPlugins);
			}
		}

		setPercentage(65);
		let contentData = new FormData();
		contentData.append('action', 'tutormate_import_demo_data');
		contentData.append('security', tutormate.ajax_nonce);
		contentData.append('selected', selectedIndex);
		contentData.append('builder', builder);
		if ('droip' === builder) {
			let droipAjaxCall = new FormData();
			droipAjaxCall.append('action', 'import_droip_template');
			droipAjaxCall.append('security', tutormate.ajax_nonce);
			droipAjaxCall.append('selected', selectedIndex);
			droipAjaxCall.append('builder', builder);
			let driopImportResponse = await fetch(tutormate.ajax_url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams(droipAjaxCall),
			});
			if (driopImportResponse.ok) {
				setPercentage(100);
				setImportCompleted(false);
			}
		} else {
			doAjax(contentData);
		}
	};

	const installationAjax = async (data) => {
		return fetch(tutormate.ajax_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams(data),
		});
	};

	const doAjax = (data) => {
		let request = new XMLHttpRequest();
		request.open('POST', tutormate.ajax_url);
		request.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				let response = JSON.parse(this.responseText);
				if ('undefined' !== response.status && 'newAJAX' === response.status) {
					setPercentage(75);
					let contentData = new FormData();
					contentData.append('action', 'tutormate_import_demo_data');
					contentData.append('security', tutormate.ajax_nonce);
					contentData.append('selected', selectedIndex);
					contentData.append('builder', builder);
					doAjax(contentData);
				} else if ('undefined' !== response.status && 'customizerAJAX' === response.status) {
					setPercentage(85);
					let customizerData = new FormData();
					customizerData.append('action', 'tutormate_import_customizer_data');
					customizerData.append('security', tutormate.ajax_nonce);
					customizerData.append('wp_customize', 'on');
					doAjax(customizerData);
				} else if ('undefined' !== response.status && 'afterAllImportAJAX' === response.status) {
					let afterImportData = new FormData();
					afterImportData.append('action', 'tutormate_after_import_data');
					afterImportData.append('security', tutormate.ajax_nonce);
					doAjax(afterImportData);
					setImportCompleted(true);
				}
			} else {
				console.log('In Progress.');
			}
		};
		request.send(data);
	};

	// Component - PopupModal
	const PopupModal = ({ selectedIndex }) => {
		return (
			<div className={`modal-wrapper ${!modalState ? '' : 'active'}`}>
				<div className="modal-content">
					<div className="modal-body">
						<div className="modal-head">
							<h3>{__('Select Your Preferred Builder', 'tutormate')}</h3>
						</div>
						<div className="radio-container">
							<RadioField selected={builder} options={builderOptions} selectedBuilder={selectedBuilder} />
						</div>
						{demoNotice && (
							<div className="notices">
								<span style={{ fontWeight: 'bold' }}>{__('Important: ', 'tutormate')}</span>
								<span dangerouslySetInnerHTML={{ __html: demoNotice }} />
							</div>
						)}
						<div className="modal-footer">
							<button className="btn btn-outline" onClick={() => toggleModalState()}>
								{__('Cancel', 'tutormate')}
							</button>
							<button
								className="btn btn-primary import-now"
								onClick={() => pluginInstall(selectedIndex, builder, plugins)}
							>
								{__('Import Now', 'tutormate')}
							</button>
						</div>
					</div>
					<div className="pluginstatus">
						<div className="pluginsheader">
							<h4>{__('Required Plugins', 'tutormate')}</h4>
						</div>
						<p>
							{__(
								'The following plugins will be installed and activated for this demo if not already available:',
								'tutormate'
							)}
						</p>
						{'droip' === builder &&
							droipPlugins &&
							droipPlugins.map((item, index) => {
								setBuilderPlugins(droipPlugins);
								return (
									<div className={`${item.state}`} key={index}>
										<strong>{item.title}</strong> <span>{item.state}</span>
									</div>
								);
							})}
						{'elementor' === builder &&
							elementorPlugins &&
							elementorPlugins.map((item, index) => {
								setBuilderPlugins(elementorPlugins);
								return (
									<div className={`${item.state}`} key={index}>
										<strong>{item.title}</strong> <span>{item.state}</span>
									</div>
								);
							})}
						{'gutenberg' === builder &&
							gutenbergPlugins &&
							gutenbergPlugins.map((item, index) => {
								setBuilderPlugins(gutenbergPlugins);
								return (
									<div className={`${item.state}`} key={index}>
										<strong>{item.title}</strong> <span>{item.state}</span>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		);
	};

	// Component - ListItems
	const ListItems = ({ listItems }) => {
		return (
			<ul className="list-container">
				{listItems.length > 0 ? (
					listItems.map((item, index) => {
						const { import_file_name, builders, import_preview_image_url, notice, preview_url } = item;
						return (
							<li className="single-item" key={index}>
								<div className="header">
									<div className="title">{import_file_name}</div>
									<div className="icons">
										{builders.map((builder, index) =>
											builder === 'droip' ? (
												<img
													key={index}
													src={`${tutormate.tutormate_url}/assets/images/droip-icon.png`}
													alt="icon"
												/>
											) : (
												<img
													key={index}
													src={`${tutormate.tutormate_url}/assets/images/${builder}.png`}
													alt="icon"
												/>
											)
										)}
									</div>
								</div>
								<figure className="thumbnail">
									<img src={import_preview_image_url} alt={import_file_name} />
									<div className="overlay">
										<h4>{__('Available for', 'tutormate')}</h4>
										<div>
											{builders.map((builder, index) => (
												<button type="button" className="btn overlay-btn" key={index}>
													{builder}
												</button>
											))}
										</div>
									</div>
								</figure>
								<div className="actions">
									<div>
										<a className="preview-url btn btn-light" href={preview_url} target="_blank">
											{__('Preview', 'tutormate')}
										</a>
										<button
											className="btn btn-primary primary-btn"
											onClick={() => getClickedItem(builders, index, notice)}
										>
											<span>{__('Import', 'tutormate')}</span>
										</button>
									</div>
								</div>
							</li>
						);
					})
				) : (
					<li className="no-list-found">{__('Nothing Found', 'tutormate')}</li>
				)}
			</ul>
		);
	};

	return (
		<div className="demo-importer-ui">
			<PopupModal selectedIndex={selectedIndex} />
			{fetching && <Installation percentage={percentage} plugins={plugins} pluginInfo={pluginInfo} />}
			<div className="demo-importer-wrapper">
				<header>
					<div className="header-top">
						<div className="logo-version">
							<img
								src={`${tutormate.tutormate_url}assets/images/tutor-starter-logo.png`}
								srcSet={`${tutormate.tutormate_url}assets/images/logo@2x.png 2x`}
								alt="tutor starter logo"
							/>
							<span>&nbsp; v{tutormate.theme_version}</span>
						</div>
						<p>
							{__(
								'Tutor LMS comes with a revolutionary drag & drop system to create resourceful courses. Tutor Starter is designed around enhancing your Tutor LMS experience.',
								'tutormate'
							)}
						</p>
					</div>
					<div className="nav-container">
						<div className="nav-filter">
							{categories.map((category, index) => (
								<button
									type="button"
									className="filter-btn"
									key={index}
									onClick={() => filterItems(category)}
								>
									<span>{category}</span>
								</button>
							))}
						</div>

						<div className="search-filter">
							<input
								type="search"
								name="search-demos"
								placeholder="Search for starter packs…"
								onChange={searchResult}
							/>
							<img
								src={`${tutormate.tutormate_url}assets/images/search-icon.png`}
								style={{ width: '14px', height: '14px' }}
								alt="icon"
							/>
						</div>
					</div>
				</header>

				<ListItems listItems={listItems} />
			</div>
		</div>
	);
}

export default App;
