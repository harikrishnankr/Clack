import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import App from "./app";
import 'font-awesome/scss/font-awesome.scss';

ReactDOM.render(
	<Router>
		<App />
	</Router>, 
	document.querySelector("#root")
);