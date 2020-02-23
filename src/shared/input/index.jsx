import React, { Component } from "react";
import "./input.scss";

class Input extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
        if(this.props.autofocus) {
            this._input.focus()
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
			autofocus,
			size = 'large',
			inputRef
		} = this.props;
		
		const customRef = (input) => {
			inputRef && inputRef(input);
			this._input = input;
		}

		const classNames = ['app-input'];
		const sizeClassName = [ 'input-wrapper' ,size];
    	isError && classNames.push('error');
    	isSuccess && classNames.push('success');
    	isWarning && classNames.push('warning');
		className && classNames.push(className);

        return (
        	<div className={sizeClassName.join(' ')}>
        		<input 
        			type={type}
        			required={isRequired}
        			className={classNames.join(' ')}
                    ref={input => customRef(input)}
        		/>
        		<span className="placeholder">{placeholder}</span>
        	</div>
        );
    }
}
export default Input;