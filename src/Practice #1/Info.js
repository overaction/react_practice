import React, {useState, useEffect, Fragment} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNick] = useState('');
    useEffect(() => {
        console.log("렌더링 완료");
        console.log({
            name,nickname
        })
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    },[])
    
    const onChangeName = e => {
        setName(e.target.value);
    }

    return (
        <Fragment>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={(e) => {setNick(e.target.value)}} /> <br />
            <b>이름 : </b> {name} <br />
            <b>닉네임: </b> {nickname} 
        </Fragment>
    )
}

export default Info;