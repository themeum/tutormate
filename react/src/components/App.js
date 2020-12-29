const { useState } = wp.element;
import "./App.css";
import { dummyData } from "./dummyData";

const allCategories = ["all", ...new Set(dummyData.map((item) => item.category).flat())];

function App() {
	const [listItems, setListItems] = useState(dummyData);
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
			setListItems(dummyData);
			return;
		}

		const newItems = dummyData.filter((item) => item.category.includes(category));
		setListItems(newItems);
	};

	const searchResult = (e) => {
		const inputValue = e.target.value.trim().toLowerCase();
		const newItems = dummyData.filter((item) => item.title.toLowerCase().includes(inputValue));
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
							The follow plugins will be installed and activated for this demo if not already available.
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
						const { title, available, imgUrl, id, plugins } = item;
						return (
							<li className="single-item" key={index}>
								<figure className="thumbnail">
									<img src={imgUrl} alt={title} />
									<div className="overlay">
										<h4>Available for</h4>
										<div>
											{available.map((btn) => (
												<button type="button" className="btn overlay-btn" key={Math.random()} onClick={() => toggleModalState()}>
													<span onClick={() => getClickedItem(plugins)}>{btn}</span>
												</button>
											))}
										</div>
									</div>
								</figure>
								<div className="actions">
									<h4>{title}</h4>
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
