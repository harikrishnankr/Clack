import React, { Component } from "react";
import { ClickOutside } from '../click-outside';

export function Icon(props) {
    return (
        <div className='dropdown-icon'>
            {props.children}
        </div>
    )
}

export function List(props) {
    return (
        <div className='dropdown-list'>
            {props.children}
        </div>
    )
}

export function Item(props) {
const { click } = props;
    return (
        <div className='dropdown-item' onClick = { click && click(event) }>
            {props.children}
        </div>
    )
}

export class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggleDropdown(hide) {
        this.setState({
            isOpen: hide ? false : !this.state.isOpen
        });
    }

    render() {
        const CIcon = this.props.children[0];
        const CList = this.props.children[1];
        return (
            <div className='dropdown u-position-relative'>
                <div 
                    className={ !this.state.isOpen ?
                        'dropdown-button-wrapper u-align-item-center u-justify-center u-flex' :
                        'dropdown-button-wrapper u-align-item-center u-justify-center u-flex active' }
                    onClick={ () =>  this.toggleDropdown()}
                >
                    {CIcon}
                </div>
                {
                    this.state.isOpen ? (
                        <ClickOutside onOutsideClick={ () => this.toggleDropdown(true) }>
                            <div className='dropdown-list-wrapper' onClick={ () => this.toggleDropdown(true) }>
                                {CList}
                            </div>
                        </ClickOutside>
                    ) : ''
                }
            </div>
        );
    }
}
