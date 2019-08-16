import React, { Component } from "react";
import "./recent-chat.scss";

class RecentChat extends Component {

	constructor(props) {
		super(props);
	}
	
    render() {
        return (
        	<div className="recent-chats u-flex u-align-item-center u-justify-center">
        		<div className="chat-list"></div>
        	</div>
        );
    }
}
export default RecentChat;
