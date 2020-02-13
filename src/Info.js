import React, { useState, Fragment, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname,setNick] = useState('');
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    },[name])
    // 뒷정리 함수로 인해 업데이트 되기 직전의 값을 보여준다
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