import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import  { withFirebase }  from '../../Firebase';
import * as ROUTES from '../../Constants/routes';
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";



const SignUpPage = () => (
    <MDBContainer className="mt-5">
        <MDBRow>
            <MDBCol md="6">
                <h2>SignUp</h2>
                 <SignUpForm />
            </MDBCol>
        </MDBRow>
    </MDBContainer>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }





    onSubmit = event => {
        event.preventDefault();
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                return this.props.firebase.user(authUser.user.uid).set({
                    username,
                    email
                });
            })
            .then(() => {
                //return this.props.firebase.doSendEmailVerification();
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
               // this.props.history.push(ROUTES.DASHBOARD);
            })
            .catch(error => {
                this.setState({ error });
            });



    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="grey-text">
                        <MDBInput
                            label="Full name"
                            icon="user"
                            group type="text"
                            validate error="wrong"
                            success="right"
                            onChange={this.onChange}
                            name="username"
                            value={username}
                            required
                        />
                        <MDBInput
                            label="Email Address"
                            icon="envelope"
                            group type="email"
                            validate
                            error="wrong"
                            success="right"
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            required
                        />
                        <MDBInput
                            label="Password"
                            icon="lock"
                            group type="password"
                            validate
                            value={passwordOne}
                            name="passwordOne"
                            onChange={this.onChange}
                            required
                        />
                        <MDBInput
                            label="Confirm Password"
                            icon="lock"
                            group type="password"
                            validate
                            value={passwordTwo}
                            name="passwordTwo"
                            onChange={this.onChange}
                            required
                        />
                        <div className="text-center">
                            <MDBBtn color="primary" disabled={isInvalid}  type="submit">Sign Up</MDBBtn>
                        </div>

                        {error && <p>{error.message}</p>}

                    </div>
                </form>
            </div>

        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };