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

class App extends Component {

    render() {
        return (
        <MDBContainer fluid>
        <Router>
            <Header />
            <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path={ROUTES.REGISTER} component={RegisterPage} />
            <Route path={ROUTES.LOGIN} component={LoginPage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        </Router>
            <Footer />
        </MDBContainer>


    );
}
  
}

export default App;
