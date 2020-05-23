import React, {Component} from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBModalBody, MDBRow} from "mdbreact";

class LoginPage extends Component {

    state = {
        email: "",
        password: ""
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render(){
        return (
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol md="6">
                        <form>
                            <p className="h3 text-center mb-4">Login</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Type your email"
                                    icon="envelope" group
                                    type="email"
                                    validate error="wrong"
                                    success="right"
                                    required
                                />
                                <MDBInput
                                    label="Type your password"
                                    icon="lock"
                                    group type="password"
                                    validate
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary" type="submit">Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        );
    }


}

export default LoginPage;