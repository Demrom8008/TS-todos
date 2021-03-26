import React from "react";
import {TodoListProps} from "../interfaces";

const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) {
        return <p className={'center'}>Your todos list is empty</p>
    }
    return (
        <ul>
            {todos.map((todo) => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type='checkbox' checked={todo.completed} onChange={onToggle.bind(null, todo.id)}/>
                            <span>{todo.title}</span>
                            <i className={'material-icons red-text'} onClick={() => onRemove(todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;