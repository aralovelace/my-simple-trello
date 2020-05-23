import React, {Component} from "react";
import CreateTaskForm from "./CreateTaskForm";
import {MDBCol, MDBRow} from "mdbreact";
import TodayList from "./TodayList";
import TomorrowList from "./TomorrowList";
import FutureList from "./FutureList";
import CompletedList from "./CompletedList";

import tasksStore from "../Stores/TasksStore";


class Dashboard extends Component {

    componentDidMount() {
        tasksStore.retrieveFromLocalStorage();
    }

    render(){

        return (
                <div>
                    <CreateTaskForm />
                    <MDBRow>
                        <TodayList/>
                        <MDBCol>
                            <TomorrowList />
                            <FutureList/>
                        </MDBCol>
                        <CompletedList/>
                    </MDBRow>
                </div>
        );

    }

}

export default Dashboard;