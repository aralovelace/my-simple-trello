import React, { Component } from "react";
import Task from "./Task";
import tasksStore from "../Stores/TasksStore";
import { observer} from "mobx-react";
import { MDBContainer, MDBListGroup} from "mdbreact";


class FutureList extends Component {
    render() {
        let tasks =tasksStore.futureTasks.map(task => <Task task={task} key={task.title} />);
        return (
            <MDBContainer className="mt-5">
                <h3>Future Deadline</h3>
                <MDBListGroup>{tasks}</MDBListGroup>
            </MDBContainer>
        );
    }

}

export default observer(FutureList);
