import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const {id, text, checked} = todo;
    return (
        <div className="TodoListItem-virtualized" style={style} >
            <div className="TodoListItem">
                <div className={cn('checkbox',{checked})} onClick={() => onToggle(id)}>
                  {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>
               <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    )
}

export default React.memo(TodoListItem);
// React.memo를 사용함으로써 TodoListItem 컴포넌트는 todo,onRemove,onToggle이 바뀌지 않으면 리렌더링을 하지 않음