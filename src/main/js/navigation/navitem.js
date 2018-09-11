import React from 'react';
import {NavLink} from 'react-router-dom';

class NavItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {pageURI: '', liClassName: '', aClassName: ''};
        this.state.pageURI = window.location.pathname + window.location.search;
        this.state.liClassName = (this.props.path === this.state.pageURI) ? 'nav-item active' : 'nav-item';
        this.state.aClassName = this.props.disabled ? 'nav-link disabled' : 'nav-link';
    }

    render() {
        return (
            <li className={this.state.liClassName}>
                <NavLink to={this.props.path} className={this.state.aClassName}>
                    {this.props.name}
                    {(this.props.path === this.state.pageURI) ? (<span className="sr-only">(current)</span>) : ''}
                </NavLink>
            </li>
        );
    }
}

export default NavItem;