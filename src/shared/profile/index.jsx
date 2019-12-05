import React, { Component } from "react";
import "./profile.scss";

export default class Profile extends Component{
    constructor(props) { super(props); }

    render() {
        const {
            active
        } = this.props;
        let classNameList = 'profile-holder u-flex u-justify-center u-align-item-center';
        if (active) {
            classNameList += ' active';
        }
        return (
            <div className={classNameList}>
                <div className="profile"></div>
            </div>
        )
    }
}