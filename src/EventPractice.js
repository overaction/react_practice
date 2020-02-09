import React, { Fragment, useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message } = form; //form.username, form.message 간소화
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = (e) => {
        if(e.key === 'Enter') onClick();
    };

    return (
        <Fragment>
            <h1>Event Practice</h1>
            <input
                type="text"
                name="username"
                placeholder="do"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="do"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}> Enter </button>
        </Fragment>
    )
}

export default EventPractice;