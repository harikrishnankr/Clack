import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Input from "../../../shared/input";
import Button from "../../../shared/button";
import "../auth.scss";

class SignUp extends Component {

	constructor(props) {
		super(props);
        this.state = {
            goToSignIn: false
        }
        this.goToSignIn = this.goToSignIn.bind(this);
	}

    goToSignIn() {
        this.setState({
            goToSignIn: true
        });
    }
	
    render() {
        return (
        	<div className="container">
                { this.state.goToSignIn ? <Redirect to="/login" /> : ""}
        		<div className="left-side">
                    <div className="logo"></div>
                    <div className="sign-in-form">
                        <h2>Sign Up</h2>
                        <form noValidate={true}>
                            <div className="form-group">
                                <Input 
                                    className="login-input" 
                                    placeholder="Email"
                                    autofocus="true"
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    type="password" 
                                    className="login-input" 
                                    placeholder="Password"
                                />
                            </div>
                            <div className="button-group">
                                <Button 
                                    type="primary" 
                                    text="Sign In"
                                />
                            </div>
                            <div className="button-group">
                                <Button 
                                    onClick={() => this.goToSignIn() } 
                                    text="Already have an account?"
                                />
                            </div>
                        </form>
                    </div>
                </div>
        	</div>
        );
    }
}
export default SignUp;