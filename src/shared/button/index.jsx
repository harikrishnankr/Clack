import React, { Component } from "react";

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

    	const classNames = ['c-button', type, className];

        return (
			<button {...this.props} type={action} className={classNames.join(' ')}>
				{text ? text : this.props.children}
			</button>
        );
    }
}
export default Button;