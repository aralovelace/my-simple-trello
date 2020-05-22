import React , {Component} from "react";
import {MDBCol, MDBContainer, MDBListGroup} from "mdbreact";
import {observer} from "mobx-react";
import tasksStore from "../../Stores/TasksStore";
import Task from "../Task";

class TomorrowList extends Component {
    render() {
        let tasks =tasksStore.tomorrowTasks.map(task => <Task task={task} key={task.title} />);
        return (
            <MDBContainer>
                <h3>Tomorrow Deadline</h3>
                <MDBListGroup>{tasks}</MDBListGroup>
            </MDBContainer>
        );
    }
}

export default observer(TomorrowList);