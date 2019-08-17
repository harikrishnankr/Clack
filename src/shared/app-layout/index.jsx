import React, { Component } from "react";
import { Route } from 'react-router-dom';

import Chat from "../../pages/chat";
import Settings from "../../pages/settings";
import SideBar from "./side-bar";
import RecentChat from "../recent-chat";

import "./app-layout.scss";

class AppLayout extends Component {

	constructor(props) {
		super(props);
	}
	
    render() {
        return (
            <div className="app-wrapper u-flex">
                <SideBar/>
                <div className="app-pages">
                    <RecentChat/>
                    <div className="u-padding page-wrapper">
                        <Route path="/app/chat" component={Chat}/>
                        <Route path="/app/settings" component={Settings}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default AppLayout;