import React, { Component } from "react";

import Input from "../../shared/input";
import Button from "../../shared/button";
import "./login.scss";

class Login extends Component {

	constructor(props) {
		super(props);
	}
	
    render() {
        return (
        	<div className="container">
        		<div className="left-side">
                    <div className="logo"></div>
                    <div className="sign-in-form">
                        <h2>Login</h2>
                        <form>
                            <div className="form-group">
                                <Input/>
                            </div>
                            <div className="form-group">
                                <Input/>
                            </div>
                            <div className="form-group button-group">
                                <Button text="Sign In"/>
                                <Button text="Sign Up"/>
                            </div>
                            <div className="form-group social-networks"></div>
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