import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './Todo_app/components/TodoTemplate';
import TodoInsert from './Todo_app/components/TodoInsert';
import TodoList from './Todo_app/components/TodoList';

function createTodos() {
    const array = [];
    for(let i=1; i<=2500; i++) {
        array.push(
            {
                id: i,
                text: `할일 ${i}`,
                checked: false
            }
        )
    }
    return array;
}

const App = () => {
    const [todos, setTodos] = useState(createTodos) // useState(createTodos()) 라고 작성하면 리렌더링 될 때마다 createTodos 함수가 호출됨.
                                                    // 지금처럼 하면 처음 렌더링 될 때만 함수가 생성됨
    //고윳값으로 사용될 id
    //ref를 사용하여 변수 담기
    const nextId = useRef(3);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text: text,
            checked: false,
        };
        setTodos(todos => todos.concat(todo));
        nextId.current += 1;
    },[]);

    const onRemove = useCallback(id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    },[]);

    const onToggle = useCallback(id => {
        setTodos(todos =>
            todos.map(todo => (
            todo.id === id ? {...todo, checked: !todo.checked} : todo
        )))
    },[])
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    )
}

export default App;
