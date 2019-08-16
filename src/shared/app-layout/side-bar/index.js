import React, { Component } from "react";

export default class SideBar extends Component{
    constructor(props) { super(props); }

    render() {
        return (
            <div className="side-bar">
                <div className="logo"></div>
                <div className="links"></div>
            </div>
        )
    }
}
