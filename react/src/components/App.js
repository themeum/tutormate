const { useState } = wp.element;

import "./App.css";
import ProgressBar from './progressBar';
import { dummyData } from "./dummyData";

let importFiles = tutormate.import_files;
const allCategories = ["all", ...new Set(importFiles.map((item) => item.categories).flat())];

function App() {
	const [listItems, setListItems] = useState(importFiles);
	const [categories, setCategories] = useState(allCategories);
	const [modalState, setModalState] = useState(false);
	const [clickedItem, setClickedItem] = useState([]);

	const toggleModalState = () => {
		setModalState(!modalState);
	};

	const getClickedItem = (plugins) => {
		setClickedItem(plugins);
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
						<p>
							The following plugins will be installed and activated for this demo if not already available.
						</p>
						{clickedItem && clickedItem.map((item, index) => <strong key={index}>{item}</strong>)}
					</div>
					<div className="modal-footer">
						<button className="btn outline-btn" onClick={() => toggleModalState()}>
							Cancel
						</button>
						<button className="btn primary-btn">Import</button>
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
											{builders.map((btn) => (
												<button type="button" className="btn overlay-btn" key={Math.random()} onClick={() => toggleModalState()}>
													<span onClick={() => getClickedItem(plugins)}>{btn}</span>
												</button>
											))}
										</div>
									</div>
								</figure>
								<div className="actions">
									<h4>{import_file_name}</h4>
									<div>
										<button className="btn primary-btn" onClick={() => toggleModalState()}>
											<span onClick={() => getClickedItem(plugins)}>Import</span>
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
			<div className="tutor-demo-importer">
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
