import React, {Component, Fragment} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    };
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
    }

    render() {
        const {password, clicked, validated} = this.state;
        return (
            <Fragment>
                <input
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                    className={clicked ? (validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증</button>
            </Fragment>
        );
    }
}

export default ValidationSample;