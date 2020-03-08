import React, { Component } from "react";
import "./search-bar.scss";

export class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="u-padding u-flex u-align-item-center search-bar-wrapper">
                <div className="search-bar u-flex">
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                    <div className="u-flex-grow-1">
                        <input type="text" placeholder="Search or start new chat"/>
                    </div>
                    <button>
                        <i className="fa fa-close"></i>
                    </button>
                </div>
            </div>
        )
    }

}
