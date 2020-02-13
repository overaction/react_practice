import React, {Fragment, useReducer} from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT' :
            return {val: state.val + 1};
        case 'DECREMENT' :
            return {val: state.val - 1};
        default :
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {val:0});
    //useReducer 첫번째 파라미터 : 리듀서 함수
    //useReducer 두번째 파라미터 : 리듀서의 기본 값
    //state : 현재 상태, dispatch : 액션을 발생시키는 함수

    return (
        <Fragment>
            <p>
                현재 값 : <b>{state.val}</b>
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </Fragment>
    )
}

export default Counter;