import React, {Component} from "react";
import {observer} from "mobx-react";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";

class RegisterPage extends Component {

    state = {
        fname: "",
        email: "",
        email_confirm:"",
        password:""
    }

    submitHandler = event => {

        const { fname, email, password } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({  });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
        event.target.className += " was-validated";

    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        return (
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={this.onSubmit}>
                            <p className="h3 text-center mb-4">Register</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group type="text"
                                    validate error="wrong"
                                    success="right"
                                    name="fname"
                                    required
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
                                />
                                <MDBInput
                                    label="Confirm your email"
                                    icon="exclamation-triangle"
                                    group type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="email_confirm"
                                    required
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group type="password"
                                    validate
                                    name="password"
                                    required

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

export default observer(RegisterPage);