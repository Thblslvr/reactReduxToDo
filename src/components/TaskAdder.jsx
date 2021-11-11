import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import addNewTask from '../store/actionsCreators'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = (state) => { // из state выдергиваем поля и помещаем в props
    console.log(state);
    return {
        tasks: state.tasks
    };
};

const mapActionsToProps = (dispatch) => { //
    return {
        addNewTask: bindActionCreators(addNewTask, dispatch)
    };
};



class TaskAdder extends Component {

    mkIdForNewTask() { return (this.props.tasks[this.props.tasks.length-1].id + 1)}

    inputRef = React.createRef();
    render() {
        console.log(this.props.tasks[this.props.tasks.length-1].id);
        return (
            <InputGroup style={{ width: '700px', margin: '0 auto', padding: '50px' }} size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">TaskAdder</InputGroup.Text>
                <FormControl ref={this.inputRef} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                <Button style={{ width: '150px', margin: '0 auto', display: 'block' }} onClick={() => {
                    this.inputRef.current.value.trim().length > 0 ?
                        this.props.addNewTask(this.inputRef.current.value.replace(/\s+/g, ' ').trim(), this.mkIdForNewTask()) : console.error('Enter the task');;
                }} variant="outline-success">Add New Task</Button>{' '}
            </InputGroup>

        ) 
    };
};

const WrappedTaskAdderComponent = connect(mapStateToProps, mapActionsToProps)(TaskAdder);

export default WrappedTaskAdderComponent;