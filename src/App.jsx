import { useEffect, useState } from 'react'
import { TodoCreate } from './components/todo_create/TodoCreate'
import {TodoList} from './components/todo_list/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [editableIdx, setEditableIdx] = useState(null);
  const [theme, setTheme] = useState('dark');

  useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(savedTodos);
    console.log(...todos);
  },[])

  useEffect(()=>{
    if(Array.isArray(todos) && todos.length >0)
      localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  const handleEdit = (todo, index) => {
    setEditTodo(todo);
    setEditableIdx(index);
  };

  return (
    <>
      <h1>React To-Do App</h1>
      <div className='themes'>
        <select name="theme" id="theme">
          <option value="theme-dark">Dark</option>
          <option value="theme-light">Light</option>
          <option value="theme-dusk">Dusk</option>
          <option value="theme-ocean">Ocean</option>
        </select>
      </div>
      <div className="mainContainer">
        <div className="col_1">
          <TodoCreate 
          editTodo={editTodo}
          editableIdx={editableIdx} 
          todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo}
          setEditableIdx={setEditableIdx}/>
        </div>
        <div className="col_2">
          <TodoList todos={todos} setTodos={setTodos}/>
        </div>
      </div>
      <tt>
        Made with 💜 by Anshu Kumar Thakur
      </tt>
    </>
  )
}

export default App
