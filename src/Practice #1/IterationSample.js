import React, { useState, Fragment } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text:'snow'},
        {id: 2, text:'ice'},
        {id: 3, text:'wind'}
    ]);
    const[inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(4);

    const onChange = (e) => {
        setInputText(e.target.value);
        console.log(e.target.value);
    }

    const onClick = () => {
        const nextNames = names.concat({ //concat : 값을 넣고 새로운 배열 생성, push : 값만 넣어줌
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id)
        setNames(nextNames);
    }

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)
    return (
        <Fragment>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            <ul>{nameList}</ul>
        </Fragment>
    )

}

export default IterationSample;