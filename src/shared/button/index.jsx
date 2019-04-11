import React, { Component } from "react";
import "./button.scss";

class Button extends Component {

	constructor(props) {
		super(props);
	}
	
    render() {
        return (
        	<button {...this.props}>{this.props.text}</button>
        );
    }
}
export default Button;