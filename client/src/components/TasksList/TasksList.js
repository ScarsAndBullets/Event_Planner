import React, { Component } from "react";

import API from "../../utils/API";

class TasksList extends Component {
    state = {
        task: {}
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/tasks/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getTask(this.props.match.params.id)
            .then(res => this.setState({ task: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-2'>
                        <Link to='/'>← Back to Tasks Page</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TasksList;