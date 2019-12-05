import React, { Component } from "react";
import "./recent-chat.scss";
import Button from "../button";
import Profile from "../profile";

class RecentChat extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const chatListWrapper = document.getElementsByClassName('profiles-wrapper')[0].offsetWidth;
		const chatInnerWrapper = document.getElementsByClassName('chat-profiles')[0].offsetWidth;
		const scrollBarWidth = chatListWrapper - chatInnerWrapper;
		document.getElementsByClassName('profiles-wrapper')[0].style.paddingLeft = scrollBarWidth +'px';
	}
	
    render() {
        return (
        	<div className="recent-chats u-flex u-align-item-center u-justify-center">
        		<div className="chat-list">
					<div className="chat-add chat-add u-flex u-align-item-center u-justify-center">
						<Button type="primary" className="font-20 u-padding u-flex u-align-item-center u-justify-center">
							+
						</Button>
					</div>
					<div className="profiles-wrapper">
						<div className="chat-profiles">
							<Profile active="true"/>
							<Profile/>
							<Profile/>
							<Profile/>
							<Profile/>
							<Profile/>
						</div>
					</div>
				</div>
        	</div>
        );
    }
}
export default RecentChat;
