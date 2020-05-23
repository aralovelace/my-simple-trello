
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
import * as ROUTES from '../Constants/routes'
class Header extends Component {

    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(){
        return (
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
                            <MDBNavLink to={ROUTES.DASHBOARD}>Board</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={ROUTES.REGISTER}>Register</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className={ROUTES.ACCOUNT}>Account</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href={ROUTES.LOGIN}>Login</MDBDropdownItem>
                                    <MDBDropdownItem href={ROUTES.ACCOUNT}>Edit Profile</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );

    }
}

export default observer(Header);
