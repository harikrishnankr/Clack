import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './styles/common.scss';

import Login from './pages/login';
import Chat from './pages/chat';

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
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={Login} />
                <Route path="/chat" component={Chat} />
                <Route exact path="/" component={Login} />
            </Switch>
        );
    }
}
export default App;
