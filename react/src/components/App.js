const { __ } = wp.i18n;
const { useState } = wp.element;

import Installation from './Installation';
import RadioField from './RadioField';

let importFiles = tutormate.import_files;
const allCategories = ["all", ...new Set( importFiles.map( ( item ) => item.categories ).flat() )];
const elementorPlugins = builderplugins.elementor_plugins;
const gutenbergPlugins = builderplugins.gutenberg_plugins;

function App() {
	const [progress, setProgress] = useState('');
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
	}

	const pluginInstall = async ( selected, builder, plugins ) => {
		setSelectedDemo( selected );
		setModalState( !modalState );
		setFetching( true );
		setProgress( 'Your site is installing...' );
		
		let pluginArray = plugins.length > 0 && plugins.map( plugin => {
				return plugin.slug;
			} );

		const selectedPlugins = pluginArray;
		let totalPlugins = selectedPlugins.length;
		let increment = Math.ceil(60/totalPlugins);
		for ( let i = 0; i < selectedPlugins.length; i++ ) {

			const res = await installationAjax({
				action: 'tutormate_individual_install_plugins',
				security: tutormate.ajax_nonce,
				selected,
				builder,
				installing: true,
				plugin: selectedPlugins[i]
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
							responseStatus: responseData.status,
							pluginState: plugins.find(plugin => plugin.slug === responseData.plugin_slug && plugin.state === 'active') ? 'active' : 'inactive'
						}
					}
				});
			} else if (responseData.status === 'error') {
				totalPlugins -= 1;
				increment = Math.ceil(60/totalPlugins);
			}
		}

		setProgress( tutormate.content_progress );
		setPercentage( 65 );
		let contentData = new FormData();
		contentData.append( 'action', 'tutormate_import_demo_data' );
		contentData.append( 'security', tutormate.ajax_nonce );
		contentData.append( 'selected', selectedDemo );
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
					setProgress( tutormate.content_progress );
					setPercentage( 75 );
					let contentData = new FormData();
					contentData.append( 'action', 'tutormate_import_demo_data' );
					contentData.append( 'security', tutormate.ajax_nonce );
					contentData.append( 'selected', selectedDemo );
					doAjax( contentData );
				} else if ( 'undefined' !== response.status && 'customizerAJAX' === response.status ) {
					setProgress( tutormate.customizer_progress );
					setPercentage( 85 );
					let customizerData = new FormData();
					customizerData.append( 'action', 'tutormate_import_customizer_data' );
					customizerData.append( 'security', tutormate.ajax_nonce );
					customizerData.append( 'wp_customize', 'on' );
					doAjax( customizerData );
					setProgress( tutormate.all_done_progress );
					setPercentage( 100 );
				} else if ( 'undefined' !== response.status && 'afterAllImportAJAX' === response.status ) {
					setProgress( tutormate.all_done_progress );
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
						<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M28 56C12.5611 56 0 43.4389 0 28C0 12.5611 12.5611 0 28 0C43.4389 0 56 12.5611 56 28C56 43.4389 43.4389 56 28 56Z" fill="#C3E678"/>
							<path d="M41.0667 46.6667C25.6278 46.6667 13.0667 34.1056 13.0667 18.6667C13.0667 12.2041 15.289 6.26248 18.9807 1.51855C7.959 5.28401 0 15.7194 0 28C0 43.4389 12.5611 56 28 56C36.9763 56 44.9585 51.7372 50.086 45.1482C47.2513 46.1167 44.2249 46.6667 41.0667 46.6667Z" fill="#A5D76E"/>
							<path d="M22.2068 42.4828C21.7126 42.4828 21.2182 42.2941 20.8414 41.917L9.25522 30.3308C8.50086 29.577 8.50086 28.354 9.25522 27.6001C10.0086 26.8458 11.2325 26.8458 11.9859 27.6001L22.2069 37.8206L42.0829 17.9449C42.8363 17.1906 44.0602 17.1906 44.8136 17.9449C45.5679 18.6987 45.5679 19.9217 44.8136 20.6756L23.5721 41.917C23.1954 42.2941 22.7009 42.4828 22.2068 42.4828Z" fill="white"/>
						</svg>
						<h3>{ __( 'Thank You!', 'tutormate' ) }</h3>
						<p>{ __( 'Visit', 'tutormate' ) } <a href={tutormate.site_url} target="__blank">{__('Site', 'tutormate')}</a> {__('or go to', 'tutormate')} <a href={tutormate.admin_url} target="__blank">{__('Dashboard', 'tutormate')}</a></p>
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
					<div className="modal-head">
						<h3>{__('Select Builder', 'tutormate')}</h3>
						<button className="close-btn" onClick={() => toggleModalState()}>
							+
						</button>
					</div>
					<div className="modal-body">
						<RadioField 
							selected={builder}
							options={builderOptions}
							selectedBuilder={selectedBuilder}
						/>
						<div className="pluginstatus">
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
					{demoNotice && <div className="notices"><span style={{fontWeight: 'bold'}}>{__('Important: ', 'tutormate')}</span><span dangerouslySetInnerHTML={{__html:demoNotice}}/></div>}
					<div className="modal-footer">
						<button className="btn btn-outline" onClick={() => toggleModalState()}>
							Cancel
						</button>
						<button className="btn btn-primary" onClick={() => pluginInstall(selectedIndex, builder, plugins)}>{__('Import Now', 'tutormate')}</button>
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
			{ fetching  && <Installation status={ progress } percentage={ percentage } plugins={plugins} pluginInfo={pluginInfo}/> }
			{ importCompleted && <AfterImport /> }
			<div className="demo-importer-wrapper">
				<header>
					<div className="header-top">
						<div className="logo-version">
							<img src={`${tutormate.tutormate_url}assets/images/tutor-starter-logo.png`} alt="tutor starter logo"/>
							<span>&nbsp; v{tutormate.theme_version}</span>
						</div>
						<p>{__('Tutor LMS comes with a revolutionary drag & drop system to create resourceful courses. It’s feature-rich, yet easy to use. Our design is centered around enhancing your experience', 'tutormate')}</p>
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
