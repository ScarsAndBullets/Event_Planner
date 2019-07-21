import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";

import API from "../../utils/API";
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";

class Tasks extends Component {
    state = {
        taskName: [],
        strikeThrough: " "
    };

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks = () => {
        API.getTasks()
            .then(res => this.setState({ taskName: res.data, strikeThrough: false }))
            .catch(err => console.log(err));
    };

    deleteTask = id => {
        API.deleteTask(id)
            .then(res => this.loadTasks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.taskName) {
            API.saveTask({
                taskName: this.state.taskName,
                strikeThrough: false
            })
                .then(res => this.loadTasks())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-6'>
                        <Jumbotron>
                            <h1>Choose what you want to contribute?</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.taskName}
                                onChange={this.handleInputChange}
                                name='taskName'
                                placeholder='Task (required)'
                            />
                            <Input
                                value={this.state.strikeThrough}
                                onChange={this.handleInputChange}
                                name='strikeThrough'
                            />
                            <FormBtn
                                disabled={!this.state.taskName}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Task
              </FormBtn>
                        </form>
                    </Col>
                    <Col size='md-6 sm-12'>
                        <Jumbotron>
                            <h1>Tasks On My List</h1>
                        </Jumbotron>
                        {this.state.tasks.length ? (
                            <List>
                                {this.state.tasks.map(task => (
                                    <ListItem key={task._id}>
                                        <Link to={"/tasks/" + task._id}>
                                            <strong>{task.taskName}</strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteBook(task._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Tasks;