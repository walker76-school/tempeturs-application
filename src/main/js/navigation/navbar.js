import React from 'react';
import NavItem from 'js/navigation/navitem';
import NavDropdown from 'js/navigation/navdropdown';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <NavItem path="/" name="Home" />
                        <NavItem path="/register" name="Register" />
                        <NavItem path="/login" name="Login" />
                        <NavItem path="/pet" name="Pet Page" />

                    </ul>

                    <button className="btn btn-outline-success my-2 my-sm-0" type="register">Register</button>
                    <button className="btn btn-success my-2 my-sm-0" type="login">Login</button>
                </div>
            </nav>
        );
    }
}

export default NavBar;