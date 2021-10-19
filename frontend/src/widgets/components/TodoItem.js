import React from 'react'
import './TodoItem.css'

const TodoItem = ({todo}) => {
    return (    
        <div className="todoItem">
            <h4>Buys some milk</h4>
            <h4 data-testid="todo">{todo.message}</h4>
        </div>
    )
}

export default TodoItem
