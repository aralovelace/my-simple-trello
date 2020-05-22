import React, { Component } from "react";
import Datetime from "react-datetime";
import "../DatetimePicker.css";
import tasksStore from "../Stores/TasksStore";
import { observer} from "mobx-react";
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBRow} from "mdbreact";
import Select from "react-select";

class CreateTaskForm extends Component {
  state = {
    title: "",
    details: "",
    due: "",
    labels: [],
    modal: false
  };

  addTask = () => {
    if (this.state.title) {
      tasksStore.addTask(
          this.state.title,
          this.state.details,
          this.state.due,
          this.state.labels
      );
      this.setState({ title: "", details: "", due:"", labels:[] });
      this.toggleModal();
    }
  };

  toggleModal = () => {
      this.setState({modal: !this.state.modal});
  };

  cancelTask = () => {
    this.setState({title: "", details: "", due: "" });
    this.toggleModal();
  };

  labelSelect = (value, action) => {
      this.setState({labels: value});
  }


  render() {
      let options = tasksStore.labelOptions.map(label => {
          return { value: label, label:label };
      });

    return (
        <MDBRow className="mt-3 mb-3">
            <MDBBtn outline color="primary" onClick={this.toggleModal.bind(this)}>
                New Task
            </MDBBtn>
            <MDBModal
                isOpen={this.state.modal}
                toggle={this.toggleModal.bind(this)}
                size="sm"
            >
                <MDBModalHeader>Add a New Task</MDBModalHeader>
                <MDBModalBody>
                  <MDBInput
                      type="text"
                      label="Task"
                      onChange={e => this.setState({ title: e.target.value })}
                      value={this.state.title}
                      placeholder="Task"
                  />
                    <MDBInput
                        type="textarea"
                        placeholder="Optional details"
                        label="Details (Optional)"
                        value={this.state.details}
                        onChange={e =>  this.setState({ details: e.target.value }) }
                    />
                    <Select
                        options={options}
                        isMulti
                        value={this.state.labels}
                        onChange={this.labelSelect.bind(this)}
                    />
                    <Datetime className="mt-3"
                        defaultValue="Optional Due Date"
                        value={this.state.due}
                        onChange={momentObj => {
                            this.setState({ due: momentObj });
                        }}
                    />
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" size="sm" onClick={this.cancelTask.bind(this)}>
                       Cancel
                    </MDBBtn>
                    <MDBBtn color="primary" size="sm" onClick={this.addTask.bind(this)}>
                        Add Task
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBRow>
      );

  }
}

export default observer(CreateTaskForm);
