import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import FutureList from "./Components/FutureList";
import CreateTaskForm from "./Components/CreateTaskForm";
import tasksStore from "./Stores/TasksStore";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import CompletedList from "./Components/CompletedList";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import TomorrowList from "./Components/Common/TomorrowList";


class App extends Component {

  componentDidMount() {
    tasksStore.retrieveFromLocalStorage();
  }

  
  render() {  
  
    return (
        <MDBContainer fluid>
            <Header />
            <CreateTaskForm />
            <MDBRow>
                <TodayList/>
                <MDBCol md="4">
                    <TomorrowList />
                    <FutureList/>
                </MDBCol>
                <CompletedList/>
            </MDBRow>
            <Footer />
      </MDBContainer>



    );
}
  
}

export default App;
