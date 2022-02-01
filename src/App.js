import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Stars from "./components/Stars";
import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);

  const starsArray = [];

  for (let i = 0; i < counter; i++){    
    starsArray.push(<Stars key={i}/>)
  }
	return (
		<div className="App">
			<Header />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginBottom: "30px",
				}}
			>
				<button
					id="remove"
					style={{ marginRight: "30px" }}
					onClick={() => setCounter(counter - 1)}
				>
					Remove
				</button>
				<div style={{ marginRight: "30px", fontSize: "30px" }}>{counter}</div>
				<button id="add" onClick={() => setCounter(counter + 1)}>
					Add
				</button>
			</div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '400px', marginLeft: '20px', marginRight: '20px'}}>{starsArray}</div>
		</div>
	);
}

export default App;
