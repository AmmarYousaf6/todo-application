import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import Todos from './widgets/components/Todos';
import Preloader from './widgets/components/Preloader';
import TodoInput from './widgets/components/TodoInput';

function App() {
  const [todos, setTodos] = useState([{id:1, message: 'ABC'},{id:2, message: 'DEF'}]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get('http://localhost:3000/todos');
      setTodos(res.data);
    }
     getTodos();
  }, []);

  const createTodo = async (text) => {
    const res = await axios.post('http://localhost:3000/todos',{message: text});
    setTodos(res.data);
  }

  return (
   <div className="App">
     <div className="container">
      <h1>Todo App</h1>
      <TodoInput createTodo={createTodo} />
      {todos ? <Todos className="todoItems" todos={todos} /> : <Preloader /> }  
     </div>
    </div>
  );
}

export default App;
