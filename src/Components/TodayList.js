import React, { Component } from "react";
import Task from "./Task";
import tasksStore from "../Stores/TasksStore";
import { observer} from "mobx-react";
import {MDBCol, MDBListGroup} from "mdbreact";

class TodayList extends Component {
    render() {
        let tasks = tasksStore.todayTasks.map(task => <Task task={task} key={task.title} />);
        return (
            <MDBCol md="4" className="mb-5">
                <h3 className="red-text">Today's Deadline</h3>
                <MDBListGroup>{tasks}</MDBListGroup>
            </MDBCol>
        );
    }
      
}

export default observer(TodayList);
