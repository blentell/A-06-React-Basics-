import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Stars from "./components/Stars";
import { useState } from "react";
import {CounterContext} from './components/CounterContext'
function App() {
	const [counter, setCounter] = useState(0);

  const starsArray = [];

  for (let i = 0; i < counter; i++){    
    starsArray.push(<Stars key={i}/>)
  }
  const counterContextValue = {
    counter,
    setCounter,
  };
	return (
		<div className="App">
			<Header />
			<CounterContext.Provider value={counterContextValue}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginBottom: "30px",
					}}
        >
          <Counter />			
				</div>
			</CounterContext.Provider>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					width: "400px",
					marginLeft: "20px",
					marginRight: "20px",
				}}
			>
				{starsArray}
			</div>
		</div>
	);
}

export default App;
