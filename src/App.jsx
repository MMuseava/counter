import AnimalDetails from "./components/animalDetails/AnimalDetails";
import ComponentTen from "./components/componentTen/ComponentTen";
import React, { useState } from "react";
import "./App.css";
import Popup from "./components/popup/Popup";

function App() {
	// const count = 0;
	const [count, setCount] = useState(1);

	const onMinusClick = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const onPlusClick = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};
	const showMessage = () => {
		if (count < 10 && count > 0) {
			return <p>keep it going</p>;
		} else if (count === 10) {
			return <p>Reached Max!</p>;
		} else if (!count) {
			return <p>Reached Min!</p>;
		}
	};

	return (
		<div className="counter">
			{/* <div className="button-group">
				<button onClick={onMinusClick}>-</button>
				<p>{count}</p>
				<button onClick={onPlusClick}>+</button>
			</div>
			<div>{showMessage()}</div>
				<ComponentTen /> */}
			<div>
				<AnimalDetails />
				</div>
			
		</div>
	);
}

export default App;
