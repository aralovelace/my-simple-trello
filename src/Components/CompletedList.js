import React, {Component} from "react";
import {MDBCol, MDBIcon, MDBListGroup} from "mdbreact";
import {observer} from "mobx-react";
import tasksStore from "../Stores/TasksStore";
import Task from "./Task";

class CompletedList extends Component {
    render() {
        let tasks =tasksStore.doneTasks.map(task => <Task task={task} key={task.title} />);
        return(
            <MDBCol md="4" className="mb-5">
                <h3 className="success-text">Completed <MDBIcon far icon="thumbs-up" /></h3>
                <MDBListGroup>{tasks}</MDBListGroup>
            </MDBCol>

        );
    }
}

export default observer(CompletedList);