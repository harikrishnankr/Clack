import React, { Component } from "react";

import Input from "../../shared/input";
import Button from "../../shared/button";
import "./login.scss";

class Login extends Component {

	constructor(props) {
		super(props);
	}
	
    render() {
        const {
            history
        } = this.props;

        console.log(history)

        return (
        	<div className="container">
        		<div className="left-side">
                    <div className="logo"></div>
                    <div className="sign-in-form">
                        <h2>Sign In</h2>
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
                                    action="submit" 
                                    type="primary" 
                                    text="Sign In"
                                />
                            </div>
                            <div className="button-group">
                                <Button 
                                    onClick={ () => history.go("/sign-up") } 
                                    text="Don't have an account?"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right-side">

                </div>
        	</div>
        );
    }
}
export default Login;