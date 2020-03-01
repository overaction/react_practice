import React, {useCallback} from 'react';
import {List} from 'react-virtualized';
import './TodoList.scss';
import TodoListItem from './TodoListItem';


// react-virtualized의 List 컴포넌트는
// index, key, style값을 받아온다.
// 또한 전체 크기, 각 항목의 높이, 각 항목을 렌더링할때 사용할 함수, 배열을 props로 넣어줘야한다.

const TodoList = ({todos, onRemove, onToggle}) => {
    const rowRenderer = useCallback(({index, key, style}) => {
        const todo = todos[index];
        return (
            <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
            />
        )
    },[onRemove,onToggle,todos])
    return (
        <List
            className="TodoList"
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{outline: 'none'}}
        />
    )
}

export default React.memo(TodoList);