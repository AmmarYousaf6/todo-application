import React from 'react'

function Todo({label}){
    return <div data-testid="button" className="button-style">{label}</div>
}

export default Todo;
