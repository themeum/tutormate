const { __ } = wp.i18n;
const { useState } = wp.element;

import Installation from './Installation';
import RadioField from './RadioField';

let importFiles = tutormate.import_files;
const allCategories = ["all", ...new Set( importFiles.map( ( item ) => item.categories ).flat() )];
const elementorPlugins = builderplugins.elementor_plugins;
const gutenbergPlugins = builderplugins.gutenberg_plugins;

function App() {
	
	const [fetching, setFetching] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const [importCompleted, setImportCompleted] = useState(false);
	const [selectedDemo, setSelectedDemo] = useState(0);
	const [builderList, setBuilderList] = useState([]);
	const [clickedItem, setClickedItem] = useState([]);
	const [modalState, setModalState] = useState(false);
	const [builder, setBuilder] = useState('gutenberg');
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [listItems, setListItems] = useState(importFiles);
	const [demoNotice, setDemoNotice] = useState('');
	const [categories, setCategories] = useState(allCategories);
	const [pluginInfo, setPluginInfo] = useState({});
	const [plugins, setPlugins] = useState([]);

	let builderOptions = builderList.length > 0 && builderList.map( item => {
		return { label: item.toUpperCase(), value: item };
	} );

	const toggleModalState = () => {
		setModalState( !modalState );
	};

	const visitSite = () => {

	}

	const filterItems = ( category ) => {
		if ( 'all' === category ) {
			setListItems( importFiles );
			return;
		}
		const newItems = importFiles.filter( ( item ) => item.categories.includes( category ) );
		setListItems( newItems );
	};

	const searchResult = ( e ) => {
		const inputValue = e.target.value.trim().toLowerCase();
		const newItems = importFiles.filter( ( item ) => item.import_file_name.toLowerCase().includes( inputValue ) );
		setListItems( newItems );
	};

	const getClickedItem = ( builders, index, notice ) => {
		setSelectedIndex( index );
		setBuilderList( builders );
		setDemoNotice( notice );
	};

	const selectedBuilder = ( builder ) => {
		setBuilder( builder );

		let builderData = new FormData();
		builderData.append( 'action', 'tutormate_builder_data' );
		builderData.append( 'security', tutormate.ajax_nonce );
		builderData.append( 'builder', builder );
		doAjax( builderData );
	}

	const pluginInstall = async ( selected, builder, plugins ) => {
		setSelectedDemo( selected );
		setModalState( !modalState );
		setFetching( true );
		
		let pluginArray = plugins.length > 0 && plugins.map( plugin => {
				return plugin.slug;
			} );

		plugins.forEach(({title, state}) => {
			setPluginInfo((prevInfo) => ({
				...prevInfo,
				[title]: {
					title,
					responseStatus: 'initial',
					pluginState: state
				}
			}));
		})

		const selectedPlugins = pluginArray;
		let totalPlugins = selectedPlugins.length;
		let increment = Math.ceil(60/totalPlugins);
		for ( let i = 0; i < selectedPlugins.length; i++ ) {
			const currentPluginName = selectedPlugins[i];
			const currentPlugin = plugins.find(plugin => plugin.slug === currentPluginName);

			setPluginInfo((prevInfo) => ({
				...prevInfo,
				[currentPlugin.title]: {
					title: currentPlugin.title,
					responseStatus: 'installing',
					pluginState: currentPlugin.state
				}
			}));

			const res = await installationAjax({
				action: 'tutormate_individual_install_plugins',
				security: tutormate.ajax_nonce,
				selected,
				builder,
				installing: true,
				plugin: currentPluginName
			});
			
			const responseData = await res.json();

			if (responseData.status === 'success') {
				setPercentage(val => {
					val = Math.min(60, val + increment);
					return val;
				});
				setPluginInfo(prevData => {
					return {
						...prevData,
						[responseData.plugin_name]: {
							title: responseData.plugin_name,
							responseStatus: 'success',
							pluginState: currentPlugin.state
						}
					}
				});
			} else if (responseData.status === 'error') {
				totalPlugins -= 1;
				increment = Math.ceil(60/totalPlugins);
			}
		}

		setPercentage( 65 );
		let contentData = new FormData();
		contentData.append( 'action', 'tutormate_import_demo_data' );
		contentData.append( 'security', tutormate.ajax_nonce );
		contentData.append( 'selected', selectedIndex );
		contentData.append( 'builder', builder );
		doAjax( contentData );
	}

	const installationAjax = async (data) => {
		return fetch(tutormate.ajax_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams(data)
		});
	}

	const doAjax = ( data ) => {
		let request = new XMLHttpRequest();
		request.open( "POST", tutormate.ajax_url );   
		request.onreadystatechange = function() {
			if ( this.readyState == 4 && this.status == 200 ) {
				let response = JSON.parse( this.responseText );
				if ( 'undefined' !== response.status && 'newAJAX' === response.status ) {
					setPercentage( 75 );
					let contentData = new FormData();
					contentData.append( 'action', 'tutormate_import_demo_data' );
					contentData.append( 'security', tutormate.ajax_nonce );
					contentData.append( 'selected', selectedIndex );
					contentData.append( 'builder', builder );
					doAjax( contentData );
				} else if ( 'undefined' !== response.status && 'customizerAJAX' === response.status ) {
					setPercentage( 85 );
					let customizerData = new FormData();
					customizerData.append( 'action', 'tutormate_import_customizer_data' );
					customizerData.append( 'security', tutormate.ajax_nonce );
					customizerData.append( 'wp_customize', 'on' );
					doAjax( customizerData );
					setPercentage( 100 );
				} else if ( 'undefined' !== response.status && 'afterAllImportAJAX' === response.status ) {
					let afterImportData = new FormData();
					afterImportData.append( 'action', 'tutormate_after_import_data' );
					afterImportData.append( 'security', tutormate.ajax_nonce );
					doAjax( afterImportData );
					setFetching( false );
					setImportCompleted( true );
				}
			} else {
				console.log( 'In Progress.' );
			}
		};      
		request.send( data );
	}

	// Component - After Import
	const AfterImport = () => {
		return (
			<div className="installation-complete modal-wrapper active">
				<div className="modal-content">
					<div className="modal-head">
						<button className="close-btn" onClick={ () => setImportCompleted( false ) }>
							+
						</button>
					</div>
					<div className="modal-body">
						<div className="heading">
							<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M24 41C33.3888 41 41 33.3888 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 33.3888 14.6112 41 24 41ZM15.5663 24.8555C15.6107 24.9627 15.6747 25.0607 15.7552 25.1443L21.7787 31.1456C21.8582 31.2383 21.9567 31.3128 22.0675 31.3641C22.3046 31.462 22.5708 31.462 22.8079 31.3641C22.9187 31.3128 23.0172 31.2383 23.0967 31.1456L33.7628 20.535C33.8432 20.4514 33.9073 20.3535 33.9516 20.2463C34.0401 20.0074 34.0401 19.7447 33.9516 19.5058C33.9082 19.3981 33.844 19.3 33.7628 19.217L32.4226 17.9138C32.3442 17.8238 32.2476 17.7514 32.1391 17.7016C32.0305 17.6518 31.9126 17.6257 31.7932 17.6251C31.666 17.6235 31.5399 17.6487 31.423 17.6991C31.3103 17.7509 31.2085 17.8238 31.1231 17.9138L22.4451 26.5919L18.4023 22.5416C18.3145 22.451 18.2102 22.3781 18.095 22.3269C17.9784 22.2757 17.8521 22.2504 17.7247 22.2529C17.6073 22.2532 17.4912 22.2785 17.3841 22.3269C17.2729 22.3758 17.1742 22.4492 17.0954 22.5416L15.7552 23.8263C15.674 23.9093 15.6098 24.0074 15.5663 24.1151C15.4779 24.354 15.4779 24.6166 15.5663 24.8555Z" fill="#24A148"/>
							</svg>

							<h3>{ __( 'Import Successful!', 'tutormate' ) }</h3>
						</div>
						<button className="btn btn-primary import-now complete"><a href={tutormate.site_url} target="__blank">{__('View Your Site', 'tutormate')}</a></button>
					</div>
				</div>
			</div>
		);
	}

	// Component - PopupModal
	const PopupModal = ({ selectedIndex }) => {
		return (
			<div className={`modal-wrapper ${!modalState ? "" : "active"}`}>
				<div className="modal-content">
					<div className="modal-body">
						<div className="modal-head">
							<h3>{__('Select Your Preferred Builder', 'tutormate')}</h3>
						</div>
						<div className="radio-container">
							<RadioField 
								selected={builder}
								options={builderOptions}
								selectedBuilder={selectedBuilder}
							/>
						</div>
						{demoNotice && <div className="notices"><span style={{fontWeight: 'bold'}}>{__('Important: ', 'tutormate')}</span><span dangerouslySetInnerHTML={{__html:demoNotice}}/></div>}
						<div className="modal-footer">
							<button className="btn btn-outline" onClick={() => toggleModalState()}>
								Cancel
							</button>
							<button className="btn btn-primary import-now" onClick={() => pluginInstall(selectedIndex, builder, plugins)}>{__('Import Now', 'tutormate')}</button>
						</div>
					</div>
					<div className="pluginstatus">
						<div className="pluginsheader">
							<h4>{__('Required Plugins', 'tutormate')}</h4>
						</div>
						<p>
							{__('The following plugins will be installed and activated for this demo if not already available:', 'tutormate')}
						</p>
						
						{'elementor' === builder &&
							elementorPlugins && elementorPlugins.map((item, index) => {
								setPlugins( elementorPlugins )
								return (<div className={`${item.state}`} key={index}><strong>{item.title}</strong> <span>{item.state}</span></div>)
							})}
						{'gutenberg' === builder &&
							gutenbergPlugins && gutenbergPlugins.map((item, index) => {
								setPlugins( gutenbergPlugins )
								return (<div className={`${item.state}`} key={index}><strong>{item.title}</strong> <span>{item.state}</span></div>)
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
										{builders.map( (builder, index) => builder === 'gutenberg' ? 
											(<img key={index} src={`${tutormate.tutormate_url}/assets/images/qubely.png`} alt="icon"/>) : 
											(<img key={index} src={`${tutormate.tutormate_url}/assets/images/${builder}.png`} alt="icon"/>) )
										}
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
										<a className="preview-url btn btn-light" href={preview_url} target="__blank">{__('Preview', 'tutormate')}</a>
										<button className="btn btn-primary primary-btn" onClick={() => toggleModalState()}>
											<span onClick={() => getClickedItem(builders, index, notice)}>{__('Import', 'tutormate')}</span>
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

			<PopupModal clickedItem={ clickedItem } selectedIndex={ selectedIndex } />
			{ fetching  && <Installation percentage={ percentage } plugins={plugins} pluginInfo={pluginInfo}/> }
			{ importCompleted && <AfterImport /> }
			<div className="demo-importer-wrapper">
				<header>
					<div className="header-top">
						<div className="logo-version">
							<img src={`${tutormate.tutormate_url}assets/images/tutor-starter-logo.png`} srcset={`${tutormate.tutormate_url}assets/images/logo@2x.png 2x`} alt="tutor starter logo"/>
							<span>&nbsp; v{tutormate.theme_version}</span>
						</div>
						<p>{__('Tutor LMS comes with a revolutionary drag & drop system to create resourceful courses. Tutor Starter is designed around enhancing your Tutor LMS experience.', 'tutormate')}</p>
					</div>
					<div className="nav-container">
						<div className="nav-filter">
							{ categories.map( ( category, index ) => (
								<button
									type="button"
									className="filter-btn"
									key={ index }
									onClick={ () => filterItems( category ) }
								>
									<span>{ category }</span>
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
							<img src={`${tutormate.tutormate_url}assets/images/search-icon.png`} style={{width: '14px', height: '14px'}} alt="icon"/>
						</div>
					</div>
				</header>

				<ListItems listItems={ listItems } />
			</div>
		</div>
	);
}

export default App;
