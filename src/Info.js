import React, { useState, Fragment, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname,setNick] = useState('');
    useEffect(() => {
        console.log('rendering complete');
        console.log({
            name,
            nickname
        })
    },[name])
    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNick = e => {
        setNick(e.target.value);
    }

    return(
        <Fragment>
            <Fragment>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNick} />
                <br/>
            </Fragment>
            <Fragment>
                <Fragment>
                    <b>name: </b> {name} <br/>
                </Fragment>
                <Fragment>
                    <b>nickname: </b> {nickname}
                </Fragment>
            </Fragment>
        </Fragment>
    )
}

export default Info;