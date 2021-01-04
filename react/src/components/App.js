const { __ } = wp.i18n;
const { useState } = wp.element;
const { SelectControl } = wp.components;

import "./App.css";
import ProgressBar from './progressBar';
import { dummyData } from "./dummyData";
import Preloader from './preloader';

let importFiles = tutormate.import_files;
const allCategories = ["all", ...new Set(importFiles.map((item) => item.categories).flat())];

function App() {
	const [listItems, setListItems] = useState(importFiles);
	const [categories, setCategories] = useState(allCategories);
	const [modalState, setModalState] = useState(false);
	const [clickedItem, setClickedItem] = useState([]);
	const [builder, setBuilder] = useState('');

	let builderOptions = [
		{label: 'Select Builder', value: ''},
	];

	const toggleModalState = () => {
		setModalState(!modalState);
	};

	const selectedBuilder = (builder) => {
		setBuilder(builder);
		let data = new FormData();
		data.append( 'action', 'selected_builder' );
		data.append( 'security', tutormate.ajax_nonce);
		data.append( 'builder', builder );
		doAjax(data);
	}

	const doAjax = (data) => {
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

	const getClickedItem = (plugins, builders) => {
		setClickedItem(plugins);
		
		if ('' !== builders) {
			Object.keys(builders).map(item => {
				builderOptions.push({ label: item, value: item })
			});
		}
		console.log('Builders: ' + builderOptions);
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
	const PopupModal = ({ clickedItem }) => {
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
						{clickedItem && clickedItem.map((item, index) => <strong key={index}>{item.title} - {item.state}</strong>)}
					</div>
					<div className="modal-footer">
						<button className="btn outline-btn" onClick={() => toggleModalState()}>
							Cancel
						</button>
						<button className="btn primary-btn">Import Now</button>
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
											<span onClick={() => getClickedItem(plugins, builders)}>Import</span>
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
			
			<PopupModal clickedItem={clickedItem} />
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
