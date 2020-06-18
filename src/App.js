import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Router, navigate } from '@reach/router';
import firebase from './Components/Firebase/firebase';
import RegisterPage from "./Components/User/Register";
import * as ROUTES from './Components/Constants/routes'
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Common/Header";
import Footer frosm "./Components/Common/Footer";
import LoginPage from "./Components/User/Login";
import AccountPage from "./Components/User/AccountPage";



class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            displayName: null,
            userID: null
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(FBUser => {
            if (FBUser) {
                this.setState({
                    user: FBUser,
                    displayName: FBUser.displayName,
                    userID: FBUser.uid
                });
            }
        });
    }

    registerUser = userName => {
        firebase.auth().onAuthStateChanged(FBUser => {
            FBUser.updateProfile({
                displayName: userName
            }).then(() => {
                this.setState({
                    user: FBUser,
                    displayName: FBUser.displayName,
                    userID: FBUser.uid
                });
                navigate('/account');
            });
        });
    };

    logOutUser = e => {
        e.preventDefault();
        this.setState({
            displayName: null,
            userID: null,
            user: null
        });

        firebase
            .auth()
            .signOut()
            .then(() => {
                navigate('/login');
            });
    };

    render() {
        return (
        <div>

       <Router>
            <Header  user={this.state.user} />
           <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
           <Route path={ROUTES.LOGIN} component={LoginPage} />
           <Route path={ROUTES.ACCOUNT} component={AccountPage} />
           <Route path={ROUTES.REGISTER} component={RegisterPage}
                  component={() => <RegisterPage registerUser={this.registerUser} />} />
        </Router>
        <Footer />


        </div>


    );
}
  
}

export default App;
