import React, { Component } from "react";
import Task from "./Task";
import tasksStore from "../Stores/TasksStore";
import { observer} from "mobx-react";
import {MDBCol, MDBListGroup} from "mdbreact";


class FutureList extends Component {
    render() {
        let tasks =tasksStore.futureTasks.map(task => <Task task={task} key={task.title} />);
        return (
            <MDBCol md="4">
                <h3>Future Deadline</h3>
                <MDBListGroup>{tasks}</MDBListGroup>
            </MDBCol>
        );
    }

}

export default observer(FutureList);
