import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './styles/common.scss';

import Login from './pages/login';
import Chat from './pages/chat';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/chat" component={Chat} />
        		<Route exact path="/" component={Login} />
        	</Switch>
        );
    }
}
export default App;