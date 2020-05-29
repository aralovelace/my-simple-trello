import React, { Component } from "react";
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import RegisterPage from "./Components/User/Register";
import * as ROUTES from './Components/Constants/routes'
import Dashboard from "./Components/Dashboard";
import {MDBContainer} from "mdbreact";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import LoginPage from "./Components/User/Login";
import AccountPage from "./Components/User/AccountPage";
import  { FirebaseContext } from './Components/Firebase';
class App extends Component {

    render() {
        return (
        <div>
        <Router>
            <Header />
            <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path={ROUTES.REGISTER} component={RegisterPage} />
            <Route path={ROUTES.LOGIN} component={LoginPage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        </Router>
            <Footer />

            <FirebaseContext.Consumer>
                {firebase => {
                    return <div>I've access to Firebase and render something.</div>;
                }}
            </FirebaseContext.Consumer>
        </MDBContainer>

        </div>


    );
}
  
}

export default App;
