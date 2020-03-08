import React, { Component } from "react";
import "./chat.scss";
import { Dropdown, Icon, List, Item } from '../../shared/dropdown';
import { SearchBar } from '../../shared/search-bar';

class Chat extends Component {

	constructor(props) {
		super(props);
	}
	
    render() {
        return (
			<div className="chat-wrapper u-flex">
				<div className="chat-left-panel">
					<div className='left-panel-header u-padding u-flex'>
						<div className='logo'></div>
						<div className='buttons u-flex u-flex-grow-1 u-justify-end u-align-item-center'>
							<div className='add-button'>
								<button className='c-button gray'>
									<i className="fa fa-user-plus" aria-hidden="true"></i>
								</button>
							</div>
							<div className='more-actions'>
								<Dropdown>
									<Icon>
										<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
									</Icon>
									<List>
										<Item>Profile</Item>
										<Item>Logout</Item>
									</List>
								</Dropdown>
							</div>
						</div>
					</div>
					<SearchBar></SearchBar>
					<div className='recent-messages u-padding'>

					</div>
				</div>
				<div className='chat-right-panel'>
					<div className='chat-header'></div>
					<div className='message-inbox'></div>
					<div className='message-box'></div>
				</div>
			</div>
        );
    }
}
export default Chat;