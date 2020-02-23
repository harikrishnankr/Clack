import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Input from "../../../shared/input";
import Button from "../../../shared/button";
import Http from "@HttpClient";
import "../auth.scss";

class Login extends Component {

	constructor(props) {
		super(props);
        this.state = {
            goToSignUp: false
        }
        this.goToSignUp = this.goToSignUp.bind(this);
	}

    goToSignUp() {
        this.setState({
            goToSignUp: true
        });
    }

    login() {
        Http.post({
            url: 'user/authenticate',
            body: {
                username: this.username.value,
                password: this.password.value
            }
        })
        .then(res=> {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
	
    render() {
        return (
        	<div className="container">
                { this.state.goToSignUp ? <Redirect to="/sign-up" /> : ""}
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
                                    inputRef={ (input) => this.username = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    type="password" 
                                    className="login-input" 
                                    placeholder="Password"
                                    inputRef={ (input) => this.password = input }
                                />
                            </div>
                            <div className="button-group">
                                <Button 
                                    type="primary" 
                                    text="Sign In"
                                    onClick={() => this.login()}
                                />
                            </div>
                            <div className="button-group">
                                <Button 
                                    onClick={() => this.goToSignUp() } 
                                    text="Don't have an account?"
                                />
                            </div>
                        </form>
                    </div>
                </div>
        	</div>
        );
    }
}
export default Login;