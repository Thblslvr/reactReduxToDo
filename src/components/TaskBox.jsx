import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeTask, saveUpdatedTask } from "../store/actionsCreators";
import WrappedTaskComponent from "./Task";
import "bootstrap/dist/css/bootstrap.min.css";

const mapActionsToProps = (dispatch) => {
  //
  return {
    removeTask: bindActionCreators(removeTask, dispatch),
    saveUpdatedTask: bindActionCreators(saveUpdatedTask, dispatch),
    toEdit: bindActionCreators(saveUpdatedTask, dispatch)
  };
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};

class TaskBox extends Component {
  render() {
    return this.props.tasks.map((el, i) => {
      return (
        <WrappedTaskComponent
          key={i}
          taskInner={el.task}
          id={el.id}
          taskInEditing={el.taskInEditing}
        />
      );
    });
  }
}
const WrappedTaskBoxComponent = connect(
  mapStateToProps,
  mapActionsToProps
)(TaskBox);

export default WrappedTaskBoxComponent;
