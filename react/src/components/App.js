const { __ } = wp.i18n;
const { useState, useEffect } = wp.element;
const { SelectControl } = wp.components;

import "./App.css";
import ProgressBar from './progressBar';
import Preloader from './preloader';

let importFiles = tutormate.import_files;
const allCategories = ["all", ...new Set(importFiles.map((item) => item.categories).flat())];

function App() {
	const [progress, setProgress] = useState('');
	const [fetching, setFetching] = useState(false);
	const [selectedDemo, setSelectedDemo] = useState(0);
	const [builderList, setBuilderList] = useState([]);
	const [clickedItem, setClickedItem] = useState([]);
	const [modalState, setModalState] = useState(false);
	const [builder, setBuilder] = useState('gutenberg');
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [listItems, setListItems] = useState(importFiles);
	const [categories, setCategories] = useState(allCategories);

	const [percentage, setPercentage] = useState(0);
   
	let builderOptions = builderList.length > 0 && builderList.map( item => {
		return {label: item.toUpperCase(), value: item};
	} );

	const toggleModalState = () => {
		setModalState( !modalState );
		true === modalState ? setBuilderList( [] ) : null;
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

	const getClickedItem = ( builders, index ) => {
		setSelectedIndex( index );
		setBuilderList( builders );
	};

	const selectedBuilder = ( builder ) => {
		setBuilder( builder );
	}

	const pluginInstall = ( selected, builder ) => {
		setSelectedDemo( selected );
		setModalState( !modalState );
		setFetching( true );
		setProgress( tutormate.plugin_progress );
		setPercentage( 10 );
		var data = new FormData();
		data.append( 'action', 'tutormate_install_plugins' );
		data.append( 'security', tutormate.ajax_nonce );
		data.append( 'selected', selected );
		data.append( 'builder', builder );
		doAjax( data );
	}

	const doAjax = ( data ) => {
		jQuery.ajax({
			method:      'POST',
			url:         tutormate.ajax_url,
			data:        data,
			contentType: false,
			processData: false,
		})
		.done( function( response ) {
			if ( 'undefined' !== response.status && 'pluginSuccess' === response.status ) {
				setProgress( tutormate.content_progress );
				setPercentage( 60 );
				let contentData = new FormData();
				contentData.append( 'action', 'tutormate_import_demo_data' );
				contentData.append( 'security', tutormate.ajax_nonce );
				contentData.append( 'selected', selectedDemo );
				doAjax( contentData );
			} else if ( 'undefined' !== response.status && 'customizerAJAX' === response.status ) {
				setProgress( tutormate.customizer_progress );
				setPercentage( 90 );
				let customizerData = new FormData();
				customizerData.append( 'action', 'tutormate_import_customizer_data' );
				customizerData.append( 'security', tutormate.ajax_nonce );
				customizerData.append( 'wp_customize', 'on' );
				doAjax( customizerData );
			} else if ( 'undefined' !== response.status && 'afterAllImportAJAX' === response.status ) {
				let afterImportData = new FormData();
				afterImportData.append( 'action', 'tutormate_after_import_data' );
				afterImportData.append( 'security', tutormate.ajax_nonce );
				doAjax( afterImportData );
				setProgress( tutormate.all_done_progress );
				setPercentage( 100 );
				setTimeout( () => {
					setFetching( false );
				}, 1000 )
			}
		})
		.fail( function( error ) {
			console.log( error );
		});
	}

	// Component - PopupModal
	const PopupModal = ( { selectedIndex } ) => {
		const elementorPlugins = builderplugins.elementor_plugins;
		const gutenbergPlugins = builderplugins.gutenberg_plugins;
		return (
			<div className={`modal-wrapper ${!modalState ? "" : "active"}`}>
				<div className="modal-content">
					<div className="modal-head">
						<h3>Required Plugins</h3>
						<button className="close-btn" onClick={() => toggleModalState()}>
							+
						</button>
					</div>
					<div className="modal-body">
					<SelectControl
						label={__('Select Builder', 'tutorstarter')}
						value={builder}
						options={builderOptions}
						onChange={(value) => selectedBuilder(value)}
					/>
						<p>
							The following plugins will be installed and activated for this demo if not already available:
						</p>
						{'elementor' === builder && 
						elementorPlugins && elementorPlugins.map((item, index) => {
							return (<strong key={index}>{item.title} - {item.state}</strong>)
						})}
						{'gutenberg' === builder && 
						gutenbergPlugins && gutenbergPlugins.map((item, index) => {
							return (<strong key={index}>{item.title} - {item.state}</strong>)
						})}
					</div>
					<div className="modal-footer">
						<button className="btn outline-btn" onClick={ () => toggleModalState() }>
							Cancel
						</button>
						<button className="btn primary-btn" onClick={ () => pluginInstall( selectedIndex, builder ) }>Import Now</button>
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
						const { import_file_name, builders, import_preview_image_url, id, plugins } = item;
						return (
							<li className="single-item" key={index}>
								<figure className="thumbnail">
									<img src={import_preview_image_url} alt={import_file_name} />
									<div className="overlay">
										<h4>Available for</h4>
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
									<h4>{import_file_name}</h4>
									<div>
										<button className="btn primary-btn" onClick={ () => toggleModalState() }>
											<span onClick={ () => getClickedItem( builders, index ) }>Import</span>
										</button>
									</div>
								</div>
							</li>
						);
					})
				) : (
					<li className="no-list-found">Nothing Found</li>
				)}
			</ul>
		);
	};

	return (
		<div className="demo-importer-ui">
			
			<PopupModal clickedItem={clickedItem} selectedIndex={selectedIndex} />
			{fetching && <Preloader status={progress} percentage={percentage} />}
			<div className="demo-importer-wrapper">
				<header>
					<h3>Welcome to Tutor Starter Demo Importer</h3>
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
								placeholder="Search demos"
								onChange={searchResult}
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
