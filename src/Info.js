import React, { useReducer, Fragment } from 'react';

function reducer(state,action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const[state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const {name,nickname} = state;
    const onChange = e => {
        dispatch(e.target); //reducer 함수 호출
    }

    return (
        <Fragment>
            <input name="name" value={name} onChange={onChange} />
            <input name="nickname" value={nickname} onChange={onChange} />
            <br/>
            <b>이름 : </b> {name}> <br/>
            <b>닉네임 : </b> {nickname}> 

        </Fragment>
    )
}

export default Info;