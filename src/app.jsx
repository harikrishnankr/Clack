import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Login from './components/login';

class App extends Component {
    render() {
        return (
        	<Switch>
        		<Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
        	</Switch>
        );
    }
}
export default App;