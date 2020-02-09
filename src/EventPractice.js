import React, { Fragment, useState } from 'react';
import { placeholder } from '@babel/types';

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }
    const onClick = () => {
        alert(username + ': ' + message);
        setUsername('');
        setMessage('');
    }
    const onKeyPress = (e) => {
        if(e.key === 'Enter') onClick();
    }

    return (
        <Fragment>
            <h1>Event Practice</h1>
            <input
                type="text"
                name="username"
                placeholder="do"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="username"
                placeholder="do"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}> Enter </button>
        </Fragment>
    )
}

export default EventPractice;