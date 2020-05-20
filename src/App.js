import React, { Component } from "react";
import TodayList from "./Components/TodayList";
import FutureList from "./Components/FutureList";
import CreateTaskForm from "./Components/CreateTaskForm";
import tasksStore from "./Stores/TasksStore";
import moment from "moment";
import { MDBContainer } from "mdbreact";

class App extends Component {
  state = {
    todayTasks: [
      {
        title: "Eat a banana",
        details: "Find a banana. Eat it.",
        due: moment()
      }
    ],
    futureTasks: []
  }



  componentDidMount() {
    tasksStore.retrieveFromLocalStorage();
  }

  
  render() {  
  
    return (<MDBContainer>
        <CreateTaskForm />
        <TodayList/>
        <FutureList/>
      </MDBContainer>
    );
}
  
}

export default App;
