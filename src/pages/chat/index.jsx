import React, { Component } from "react";
import "./chat.scss";
import Profile from "../../shared/profile";
import Button from "../../shared/button";

class Chat extends Component {

	constructor(props) {
		super(props);
	}
	
    render() {
        return (
			<div className="chat-wrapper">
				<div className="chat-header u-flex">
					<div className="chat-user-wrapper u-flex u-flex-grow-1">
						<div className="u-flex chat-user">
							<Profile/>
						</div>
						<div className="user-name u-flex u-flex-grow-1">
							<div>User Name</div>
							<div>Last seen 10mins ago</div>
						</div>
					</div>
					<div className="u-flex u-align-item-center">
						<i className="fa fa-cog"></i>
					</div>
				</div>
				<div className="chat-body">
					<div className="chat-body-wrapper from">
						<div className="chat-message"></div>
					</div>
					<div className="chat-body-wrapper to">
						<div className="chat-message"></div>
					</div>
					<div className="chat-body-wrapper from">
						<div className="chat-message"></div>
					</div>
					<div className="chat-body-wrapper to">
						<div className="chat-message"></div>
					</div>
					<div className="chat-body-wrapper from">
						<div className="chat-message"></div>
					</div>
					<div className="chat-body-wrapper to">
						<div className="chat-message"></div>
					</div>
					<div className="chat-body-wrapper from">
						<div className="chat-message"></div>
					</div>
					<div className="chat-body-wrapper to">
						<div className="chat-message"></div>
					</div>
					<div className="chat-body-wrapper from">
						<div className="chat-message"></div>
					</div>
					<div className="chat-body-wrapper to">
						<div className="chat-message"></div>
					</div>
				</div>
				<div className="chat-footer u-flex">
					<Button className="chat-input-button">
						<i className="fa fa-paperclip"></i>
					</Button>
					<div className="chat-input u-flex-grow-1" contentEditable="true"></div>
					<div className="chat-smilies">
						<i className="fa fa-smile-o"></i>
					</div>
					<Button type="primary" className="chat-input-button">
						<i className="fa fa-paper-plane-o"></i>
					</Button>
				</div>
			</div>
        );
    }
}
export default Chat;