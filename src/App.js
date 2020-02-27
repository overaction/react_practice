import React from 'react';
import TodoTemplate from './Todo_app/components/TodoTemplate';
import TodoInsert from './Todo_app/components/TodoInsert';
import TodoList from './Todo_app/components/TodoList';

const App = () => {
    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList />
        </TodoTemplate>
    )
}

export default App;
