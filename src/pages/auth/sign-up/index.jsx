import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Http from "@HttpClient";

import Input from "../../../shared/input";
import Button from "../../../shared/button";
import "../auth.scss";
import {
    object, string
} from "yup";

class SignUp extends Component {;

	constructor(props) {
		super(props);
        this.state = {
            goToSignIn: false,
            errorMessages: {
                email: '',
                username: '',
                firstName: '',
                lastName: '',
                password: '',
                confirmPwd: ''
            }
        };
        this.signUpForm = {}
        this.goToSignIn = this.goToSignIn.bind(this);
        this.schema = object().shape({
            username: string(),
            email: string(),
            firstName: string().required('Enter a first name'),
            lastName: string().required('Enter a last name'),
            password: string().required('Enter a password'),
            confirmPwd: string().required('Confirm password is mandatory')
        });
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
    
    validate(model) {
        return this.schema.validate({
            ...model
        }, {
            abortEarly: false
        }).catch((err) => {
            const errors = {
                username: (!model.username || !model.email) ? 'Enter email/username' : ''
            };
            err.inner.forEach(field => {
                errors[field.path] = field.message;
            });
            this.setState({
                ...this.state,
                errorMessages: errors
            })
        });
    }

    signUp() {
        const {email,username} = this.getUserOrEmail();
        const model = {
            email: email,
            username: username,
            firstName: this.signUpForm.firstName.value,
            lastName: this.signUpForm.lastName.value,
            password: this.signUpForm.password.value
        }
        this.validate(model).then(() => {
            Http.post({
                url: 'user/new',
                body: {
                    email: email,
                    username: username,
                    firstName: this.signUpForm.firstName.value,
                    lastName: this.signUpForm.lastName.value,
                    password: this.signUpForm.password.value
                }
            })
            .then(res=> {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        });
    }
	
    render() {
        return (
        	<div className="container">
                { this.state.goToSignIn ? <Redirect to="/login" /> : "" }
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
                                    errorMessage={this.state.errorMessages.firstName}
                                    inputRef={ (input) => this.signUpForm.firstName = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    className="login-input" 
                                    placeholder="Last name"
                                    errorMessage={this.state.errorMessages.lastName}
                                    inputRef={ (input) => this.signUpForm.lastName = input }
                                />
                            </div>

                            <div className="form-group">
                                <Input 
                                    className="login-input" 
                                    placeholder="Email/Username"
                                    errorMessage={this.state.errorMessages.username}
                                    inputRef={ (input) => this.signUpForm.emailOrUserName = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    type="password" 
                                    className="login-input" 
                                    placeholder="Password"
                                    errorMessage={this.state.errorMessages.password}
                                    inputRef={ (input) => this.signUpForm.password = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    type="password" 
                                    className="login-input" 
                                    placeholder="Confirm Password"
                                    errorMessage={this.state.errorMessages.confirmPwd}
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