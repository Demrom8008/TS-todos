import React, {useState} from "react";
import {TodoFormProps} from "../interfaces";

const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <input onChange={changeHandler} onKeyPress={keyPressHandler} value={title} type="text" id={'title'}/>
            <label htmlFor="{'title'}" className={'active'}>
                Write your todos
            </label>
        </div>
    )
}

export default TodoForm;