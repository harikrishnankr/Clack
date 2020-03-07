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
    		errorMessage, 
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
    	errorMessage && classNames.push('error');
    	isSuccess && classNames.push('success');
    	isWarning && classNames.push('warning');
		className && classNames.push(className);

        return (
			<div className="app-input-wrapper">
				<div className={sizeClassName.join(' ')}>
					<input 
						type={type}
						required={isRequired}
						className={classNames.join(' ')}
						ref={input => customRef(input)}
					/>
					<span className="placeholder">{placeholder}</span>
				</div>
				{
					errorMessage ?
						<div className="error-message">
							<span className="fa fa-exclamation-circle"></span>
							<span className="message-text">{errorMessage}</span>
						</div>
					: ''
				}
			</div>
        );
    }
}
export default Input;