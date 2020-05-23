import React , {Component} from "react";
import { MDBListGroup} from "mdbreact";
import {observer} from "mobx-react";
import tasksStore from "../Stores/TasksStore";
import Task from "./Task";

class TomorrowList extends Component {
    render() {
        let tasks =tasksStore.tomorrowTasks.map(task => <Task task={task} key={task.title} />);
        return (
            <div className="mb-5">
                <h3>Tomorrow's Deadline</h3>
                <MDBListGroup>{tasks}</MDBListGroup>
            </div>
        );
    }
}

export default observer(TomorrowList);