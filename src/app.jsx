import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/common.scss';

import Login from './pages/auth/login';
import AppLayout from './shared/app-layout';
import SignUp from './pages/auth/sign-up';

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
                <Route path="/app" component={AppLayout}/>
            </Switch>
        );
    }
}
export default App;
