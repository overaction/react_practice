import React, { useState, Fragment } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('hello');
    const onClickLeave = () => setMessage('bye');

    const [color, setColor] = useState('black');
    return (
        <Fragment>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={() => setColor('red')}>RED</button>
            <button style={{color:'blue'}} onClick={() => setColor('blue')}>BLUE</button>

        </Fragment>
    )
}

export default Say;