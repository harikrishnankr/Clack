import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Http from "@HttpClient";

import Input from "../../../shared/input";
import Button from "../../../shared/button";
import "../auth.scss";

class SignUp extends Component {;

	constructor(props) {
		super(props);
        this.state = {
            goToSignIn: false
        };
        this.signUpForm = {}
        this.goToSignIn = this.goToSignIn.bind(this);
	}

    goToSignIn() {
        this.setState({
            goToSignIn: true
        });
    }

    getUserOrEmail() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.signUpForm.emailOrUserName.value) ?
        {
            email: this.signUpForm.emailOrUserName.value, username: ''
        } : {
            email: '', username: this.signUpForm.emailOrUserName.value
        };
    }

    signUp() {
        const {email,username} = this.getUserOrEmail();
        Http.post({
            url: 'user/new',
            body: {
                email: email,
                username: username,
                firstName: this.signUpForm.firstName.value,
                lastName: this.signUpForm.firstName.value,
                password: this.signUpForm.password.value
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
                { this.state.goToSignIn ? <Redirect to="/login" /> : ""}
        		<div className="left-side">
                    <div className="logo"></div>
                    <div className="sign-in-form">
                        <h2>Sign Up</h2>
                        <form noValidate={true}>
                            <div className="form-group">
                                <Input 
                                    className="login-input" 
                                    placeholder="First name"
                                    autofocus="true"
                                    inputRef={ (input) => this.signUpForm.firstName = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    className="login-input" 
                                    placeholder="Last name"
                                    inputRef={ (input) => this.signUpForm.lastName = input }
                                />
                            </div>

                            <div className="form-group">
                                <Input 
                                    className="login-input" 
                                    placeholder="Email/Username"
                                    inputRef={ (input) => this.signUpForm.emailOrUserName = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    type="password" 
                                    className="login-input" 
                                    placeholder="Password"
                                    inputRef={ (input) => this.signUpForm.password = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    type="password" 
                                    className="login-input" 
                                    placeholder="Confirm Password"
                                    inputRef={ (input) => this.signUpForm.confirmPwd = input }
                                />
                            </div>
                            <div className="button-group">
                                <Button 
                                    type="primary" 
                                    text="Sign In"
                                    onClick={ ()=> this.signUp() }
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

SignUp.propTypes = {
    isLoggedIn: PropTypes.bool
};

export default SignUp;