import React, {Component} from "react";
import {observer} from "mobx-react";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import firebase from '../../Firebase/firebase';
import {withRouter} from 'react-router-dom';

class RegisterPage extends Component {

    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password:"",
            passwordConfirm: "",
            errorMessage: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({ [itemName]: itemValue }, () => {
            if (this.state.password !== this.state.passwordConfirm) {
                this.setState({ errorMessage: 'Passwords no not match' });
            } else {
                this.setState({ errorMessage: null });
            }
        });
    }


    handleSubmit(e) {
        const registrationInfo = {
            displayName: this.state.displayName,
            email: this.state.email,
            password: this.state.password
        };
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(
                registrationInfo.email,
                registrationInfo.password
            )
            .then(() => {
                this.props.registerUser(registrationInfo.displayName);
            })
            .catch(error => {
                if (error.message !== null) {
                    this.setState({ errorMessage: error.message });
                } else {
                    this.setState({ errorMessage: null });
                }
            });
    };



    render() {
        return (
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={this.handleSubmit}>
                            <p className="h3 text-center mb-4">Register</p>
                            {this.state.errorMessage !== null ? (
                                <div className="col-12 alert alert-danger px-3">
                                    {this.state.errorMessage}
                                </div>
                            ) : null}
                            <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group type="text"
                                    validate error="wrong"
                                    success="right"
                                    name="displayName"
                                    required
                                    value={this.state.displayName}
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="email"
                                    required
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />

                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group type="password"
                                    validate
                                    name="password"
                                    required
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    label="Confirm password"
                                    icon="lock"
                                    group type="password"
                                    validate
                                    name="passwordConfirm"
                                    required
                                    value={this.state.passwordConfirm}
                                    onChange={this.handleChange}
                                />

                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary" type="submit">Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }

}

export default withRouter(RegisterPage);