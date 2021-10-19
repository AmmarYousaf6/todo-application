import React, {useRef} from 'react'
import './TodoInput.css'

const TodoInput = ({createTodo}) => {
    const todoInput = useRef("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(todoInput.current.value === ''){
            return false;
        }
        createTodo(todoInput.current.value);
        e.target.value = '';
    }

    return (
     <form onSubmit={handleSubmit}>
        <input type="text" ref={todoInput} data-testid="input" className="input" />
        <input type="submit" data-testid="createButton" className="submitBtn" />
    </form>

    )
}

export default TodoInput
