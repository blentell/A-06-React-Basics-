import React from "react";
import {CounterContext} from './CounterContext'
import { useContext} from "react";

function Counter() {	
const { counter, setCounter } = useContext(CounterContext);
	return (
		<div style={{ display: "flex", justifyContent: "center", marginBottom: '30px' }}>
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
  );  
}

export default Counter;
