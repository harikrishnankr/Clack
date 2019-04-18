import React, { Component } from "react";
import "./input.scss";

class Input extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const input = (this._reactInternalFiber.return.stateNode).getElementsByTagName('input');
		console.log(input)
		if(this.props.autofocus) {
			// input.
		}
	}
	
    render() {
    	const { 
    		isRequired = true, 
    		type = 'text', 
    		isError, 
    		isSuccess, 
    		isWarning,
    		isDisabled,
    		className,
    		placeholder,
    		autofocus
    	} = this.props;

    	const classNames = ['app-input'];
    	isError && classNames.push('error');
    	isSuccess && classNames.push('success');
    	isWarning && classNames.push('warning');
    	className && classNames.push(className);

        return (
        	<div className="input-wrapper">
        		<input 
        			type={type}
        			required={isRequired}
        			className={classNames.join(' ')}
        		/>
        		<span className="placeholder">{placeholder}</span>
        	</div>
        );
    }
}
export default Input;