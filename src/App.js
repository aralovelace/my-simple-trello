import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import FutureList from "./Components/FutureList";
import CreateTaskForm from "./Components/CreateTaskForm";
import tasksStore from "./Stores/TasksStore";
import moment from "moment";
import {MDBContainer, MDBRow} from "mdbreact";

class App extends Component {

  componentDidMount() {
    tasksStore.retrieveFromLocalStorage();
  }

  
  render() {  
  
    return (<MDBContainer>
        <CreateTaskForm />
        <MDBRow>
            <FutureList/>
            <TodayList/>
        </MDBRow>
      </MDBContainer>
    );
}
  
}

export default App;
