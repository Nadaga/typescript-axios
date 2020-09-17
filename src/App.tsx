import React from "react";

import "./App.css";
// import { AxiosInstance } from "axios";
import { ProviderValue, useAxios } from "./axios/Axios";

function App() {
	// const AxiosInstance = useAxios();
	const AxiosInstance = useAxios() as ProviderValue;
	console.log("AxiosInstance", AxiosInstance);
	return (
		<div className="App">
			<div className="d">hey</div>
		</div>
	);
}

export default App;
