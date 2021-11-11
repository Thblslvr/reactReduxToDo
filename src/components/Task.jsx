import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeTask, saveUpdatedTask, toEdit } from "../store/actionsCreators";
import { Button, ListGroup, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const mapActionsToProps = (dispatch) => {
  //
  return {
    removeTask: bindActionCreators(removeTask, dispatch),
    saveUpdatedTask: bindActionCreators(saveUpdatedTask, dispatch),
    toEdit: bindActionCreators(toEdit, dispatch)
  };
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};

class Task extends Component {
  takeTaskFromInput = (e) => {
    this.props.saveUpdatedTask(e.target.value, this.props.id, true);
  };

  render() {
    if (this.props.taskInEditing) {
      return (
        <div>
          <InputGroup style={{ width: "505px", margin: "0 auto" }} size="lg">
            <FormControl
              onChange={this.takeTaskFromInput}
              value={this.props.taskInner}
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
            <Button
              onClick={() => {
                return this.props.saveUpdatedTask(
                  this.props.taskInner,
                  this.props.id,
                  false
                );
              }}
              style={{ width: "150px", margin: "0 auto", display: "block" }}
              variant="outline-success"
            >
              Save
            </Button>
          </InputGroup>
        </div>
      );
    } else {
      return (
        <div style={{ margin: "0 auto", width: "505px" }}>
          <ListGroup as="ul">
            <ListGroup.Item as="li">{this.props.taskInner}</ListGroup.Item>
          </ListGroup>
          <Button
            type="disabled"
            style={{ width: "250px", height: "50px" }}
            onClick={() => {
              this.props.toEdit(this.props.id);
            }}
            variant="outline-secondary"
          >
            EDIT
          </Button>
          <Button
            style={{ width: "250px", height: "50px" }}
            onClick={() => {
              this.props.removeTask(this.props.id);
            }}
            variant="danger"
          >
            DELETE
          </Button>
        </div>
      );
    }
  }
}

const WrappedTaskComponent = connect(mapStateToProps, mapActionsToProps)(Task);

export default WrappedTaskComponent;
