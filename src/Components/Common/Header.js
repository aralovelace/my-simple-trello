
import React, { Component } from "react";
import {observer} from "mobx-react";
import {
    MDBCollapse,
    MDBDropdown,
    MDBDropdownItem, MDBDropdownMenu,
    MDBDropdownToggle,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
class Header extends Component {

    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(){
        return (<Router>
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <img
                        src="logo.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="logo"

                    />
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="#!">Board</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Register</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Account</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href="#!">Login</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Edit Profile</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </Router>);

    }
}

export default observer(Header);
