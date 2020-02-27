import React from 'react';
import TodoTemplate from './Todo_app/components/TodoTemplate';
import TodoInsert from './Todo_app/components/TodoInsert';

const App = () => {
    return (
        <TodoTemplate>
            <TodoInsert />
        </TodoTemplate>
    )
}

export default App;
