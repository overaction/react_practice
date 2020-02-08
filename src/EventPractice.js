import React, { Component, Fragment } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.name);
    }
    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        })
    }
    render() {
        const { username, message } = this.state;

        return (
            <Fragment>
                <h1>event practice</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="do something"
                    value={username}
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    name="message"
                    placeholder="do something"
                    value={message}
                    onChange={this.handleChange}
                ></input>
                <button onClick = {this.handleClick}>확인
                </button>
            </Fragment>
        )
    }
}

export default EventPractice;