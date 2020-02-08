import React, { Fragment, Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'basic name'
    };
    static propTypes = {
        name: PropTypes.string,
        favnum: PropTypes.number.isRequired
    };
    render() {
        const {name,favnum,children} = this.props;
        return (
            <Fragment>
                {name} <br/>
                {favnum} <br/>
                {children}
            </Fragment>
        )
    }
}

export default MyComponent;