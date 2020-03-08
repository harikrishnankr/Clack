import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/common.scss';

import Login from './core/auth/login';
import SignUp from './core/auth/sign-up';
import 'font-awesome/scss/font-awesome.scss';
import Chat from './core/chat';

const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}

class App extends Component {
    state = {
       loading: true
    };

    componentDidMount() {
        demoAsyncCall().then(() => this.setState({ loading: false }));
    }
 
    render() {
        const { loading } = this.state;

        if(loading) {
            return null;
        }

        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/chat" component={Chat}/>
            </Switch>
        );
    }
}
export default App;
