import React, { Component } from "react";
import "./input.scss";

class Input extends Component {

	constructor(props) {
		super(props);
	}
	
    render() {
        return (
        	<input {...this.props} />
        );
    }
}
export default Input;