import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import FutureList from "./Components/FutureList";
import CreateTaskForm from "./Components/CreateTaskForm";
import tasksStore from "./Stores/TasksStore";
import {MDBContainer, MDBRow} from "mdbreact";
import CompletedList from "./Components/CompletedList";
import Header from "./Components/Common/Header";


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
            <FutureList/>
            <CompletedList/>

        </MDBRow>
      </MDBContainer>



    );
}
  
}

export default App;
