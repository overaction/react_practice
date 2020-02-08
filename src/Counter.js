import React, {Component, Fragment} from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixednumber : 0
    };
    render() {
        const {number, fixednumber} = this.state;
        return (
            <Fragment>
                <h1>{number}</h1>
                <h2>{fixednumber}</h2>
                <button onClick = { () => {
                    this.setState(prev => {
                        return {
                            number: prev.number + 1
                        }
                    })
                    this.setState(prev => ({
                        number: prev.number + 1
                    }))
                }}> +1
                </button>
            </Fragment>
        );
    }
}

export default Counter;