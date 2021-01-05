const { __ } = wp.i18n;
const { useState } = wp.element;
const { SelectControl } = wp.components;

import "./App.css";
import ProgressBar from './progressBar';
import Preloader from './preloader';

let importFiles = tutormate.import_files;
const allCategories = ["all", ...new Set(importFiles.map((item) => item.categories).flat())];

function App() {
	const [builderList, setBuilderList] = useState([]);
	const [clickedItem, setClickedItem] = useState([]);
	const [modalState, setModalState] = useState(false);
	const [builder, setBuilder] = useState('gutenberg');
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [listItems, setListItems] = useState(importFiles);
	const [categories, setCategories] = useState(allCategories);

	let builderOptions = builderList.length > 0 && builderList.map(item => {
		return {label: item.toUpperCase(), value: item};
	});

	const toggleModalState = () => {
		setModalState(!modalState);
		true === modalState ? setBuilderList([]) : null;
	};

	const selectedBuilder = (builder) => {
		setBuilder(builder);
		let data = new FormData();
		data.append( 'action', 'tutormate_selected_builder' );
		data.append( 'security', tutormate.ajax_nonce);
		data.append( 'builder', builder );
		doBuilderAjax(data);
	}

	const doBuilderAjax = (data) => {
		jQuery.ajax({
			method:      'POST',
			url:         tutormate.ajax_url,
			data:        data,
			contentType: false,
			processData: false,
		})
		.done( function(response) {
			console.log('Response: ' + response.data);
		})
		.fail( function(error) {
			console.log(error);
		});
	}

	const getClickedItem = (plugins, builders, index) => {
		setSelectedIndex(index);
		setClickedItem(plugins);
		setBuilderList(builders);
	};

	const filterItems = (category) => {
		if (category === "all") {
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

	// Component - PopupModal
	const PopupModal = ({ clickedItem, selectedIndex }) => {
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
						{'gutenberg' === builder &&
							clickedItem && clickedItem.map((item, index) => 'elementor' !== item.slug && <strong key={index}>{item.title} - {item.state}</strong>)
						}
						{'elementor' === builder &&
							clickedItem && clickedItem.map((item, index) => 'qubely' !== item.slug && <strong key={index}>{item.title} - {item.state}</strong>)
						}
					</div>
					<div className="modal-footer">
						<button className="btn outline-btn" onClick={() => toggleModalState()}>
							Cancel
						</button>
						<button className="btn primary-btn" onClick={() => {console.log('Index: ' + selectedIndex)}}>Import Now</button>
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
										<button className="btn primary-btn" onClick={() => toggleModalState()}>
											<span onClick={() => getClickedItem(plugins, builders, index)}>Import</span>
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
			<div className="demo-importer-wrapper">
				<header>
					<h3>Welcome to One Click Demo Importer </h3>
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
