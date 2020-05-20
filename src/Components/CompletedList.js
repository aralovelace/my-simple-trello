import React, {Component} from "react";
import {MDBCol} from "mdbreact";
import {observer} from "mobx-react";

class CompletedList extends Component {
    render() {
        return(
            <MDBCol md="4">
                <h3>Completed</h3>

            </MDBCol>

        );
    }
}

export default observer(CompletedList);