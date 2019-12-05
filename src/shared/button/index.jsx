import React, { Component } from "react";
import "./button.scss";

class Button extends Component {

	constructor(props) {
		super(props);
	}
	
    render() {
    	const {
    		type = 'default',
    		text,
    		className,
            action = 'button'
    	} = this.props;

    	const classNames = ['app-button', type, className];

        return (
			<button {...this.props} type={action} className={classNames.join(' ')}>
				{text ? text : this.props.children}
			</button>
        );
    }
}
export default Button;