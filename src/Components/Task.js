import React, { Component } from "react";
import { observer} from "mobx-react";
import {
    MDBBtn,
    MDBCloseIcon,
    MDBIcon,
    MDBListGroupItem,
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader,
    MDBBadge
} from "mdbreact";
import tasksStore from "../Stores/TasksStore";

class Task extends Component {

    state = {
        modal:false
    };

    deleteTask = () => {
        this.toggleDeleteModal();
        tasksStore.deleteTask(this.props.task.id);
    }

    toggleDeleteModal = () => {
        this.setState({modal: !this.state.modal });
    }

    checkTask = () => {
        tasksStore.checkTask(this.props.task.id);
    }

    render() {
        let labels;
        if (this.props.task.labels && this.props.task.labels.length > 0) {
            labels = this.props.task.labels.map(label => {
                return (
                    <MDBBadge pill color="primary" className="mr-2">
                        {label.label}
                    </MDBBadge>

                );
            });
        }

        let dueDate;
      if (this.props.task.due)
          dueDate = <span className="light-blue-text"> {this.props.task.due.fromNow()}</span>;
      return (
          <MDBListGroupItem className="rgba(3, 169, 244, 0.1) rgba-blue-slight" color="primary-color-dark" >
              <MDBModal
                modalStyle="danger"
                className="text-white"
                size="sm"
                position="top"
                isOpen={this.state.modal}
                toggle = {this.toggleDeleteModal.bind(this)}
              >
                  <MDBModalHeader
                  className="text-center"
                  titleClass="w-100"
                  tag="p"
                  toggle={this.toggleDeleteModal.bind(this)}
                  >
                  Are you sure?
                  </MDBModalHeader>
                  <MDBModalBody className="text-center">
                      delete task - <strong>"{this.props.task.title}"</strong>
                  </MDBModalBody>
                  <MDBModalFooter className="justify-content-center">
                      <MDBBtn color="danger" onClick={this.deleteTask.bind(this)}>Yes</MDBBtn>
                      <MDBBtn color="danger" outline onClick={this.toggleDeleteModal.bind(this)}>No</MDBBtn>
                  </MDBModalFooter>
              </MDBModal>
              <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-start flex-column">
                      <div className="d-flex justify-content-start">
                          <div className="align-self-center">
                              <MDBIcon
                                  far
                                  icon="square"
                                  size="2x"
                                  onClick={this.checkTask.bind(this)}
                                  />
                          </div>
                      </div>
                      <div className="flex-grow-1 pb-3 pt-3 text-wrap">
                          <h5 className="mb-1 blue-text"><strong>{this.props.task.title}</strong></h5>
                      </div>
                  </div>
                  <div>
                      <MDBCloseIcon
                          className="ml-auto"
                          onClick={this.toggleDeleteModal.bind(this)}
                      />
                  </div>
              </div>
              <p className="mb-1">{this.props.task.details}</p>
              <small className="mb-3 mt-3">
                  Due: {dueDate}
              </small>
              <div className="flex-row mb-2">{labels}</div>
          </MDBListGroupItem>
      );
    }
}

export default observer(Task);
