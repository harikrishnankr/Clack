import React, { Component } from "react";

export class ClickOutside extends Component {

    constructor(props) {
        super(props);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick, false);
    }
  
    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (!this.node.contains(e.target)) {
            const { onOutsideClick } = this.props;
            onOutsideClick && onOutsideClick();
        }
    }

    render() {
        const { children } = this.props;
        return (
            <div ref={node => { this.node = node; }}>{children}</div>
        );
    }
}
