import React from "react"; //Esta linea ya no es obligatoria react puede reconocer sin este cambio
import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Header />
			<Characters />
			<h1>Hola React Hooks</h1>
		</div>
	);
}

export default App;
