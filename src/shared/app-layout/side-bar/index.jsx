import React, { Component } from "react";
import Profile from '../profile';
import { NavLink } from 'react-router-dom';

export default class SideBar extends Component{
    constructor(props) { super(props); }

    render() {
        return (
            <div className="side-bar">
                <div className="logo"></div>
                <div className="links u-flex u-align-item-center">
                    <NavLink to="/app/chat" className="link-button">
                        <div className="icon">
                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                        </div>
                        <div className="icon-text">
                            Chat
                        </div>
                    </NavLink>
                    <NavLink to="/app/settings" className="link-button">
                        <div className="icon">
                            <i className="fa fa-cog" aria-hidden="true"></i>
                        </div>
                        <div className="icon-text">
                            Settings
                        </div>
                    </NavLink>
                </div>
                <div className="profile u-flex u-justify-center">
                    <Profile/>
                </div>
            </div>
        )
    }
}
