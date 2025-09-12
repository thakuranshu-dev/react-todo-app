import { useEffect, useState } from 'react'
import { TodoCreate } from './components/todo_create/TodoCreate'
import {TodoList} from './components/todo_list/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [editableIdx, setEditableIdx] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [showCreate, setShowCreate] = useState(true);

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
    // console.log("Editable:", todo);
    setEditTodo(todo);
    setEditableIdx(index);
  };

  useEffect(()=>(
    document.documentElement.setAttribute('data-theme', theme)
  ),[theme]);


  return (
    <>
      <h1 >React To-Do App</h1>
      <i 
      onClick={() => setShowCreate(prev => !prev)}
      className="toggleCreateBtn"
      style={{left: !showCreate ? "10px" : "310px", color: theme === 'dark'? "white" : "black"}}
      aria-readonly="true"
      >
        {showCreate ? <img src={"./menu.png"} alt="Open sidebar" /> : <img src='./menu_open.png' alt="Close sidebar" height={'32px'} width={'32px'}/> }
      </i>

      <div className='themeSelector'>
        <select name="theme" id="theme" value={theme} onChange={(e)=>setTheme(e.target.value)}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div className="mainContainer">
        {showCreate && 
        <div className="col_1">
          <TodoCreate 
          editTodo={editTodo}
          editableIdx={editableIdx} 
          todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo}
          setEditableIdx={setEditableIdx}/>
        </div>}
        <div className="col_2"
        style={!showCreate?{width:"100%"}:{width:"calc(100% - 350px)"}}>

          {Array.isArray(todos) && todos.length > 0 ?
            <TodoList todos={todos} setTodos={setTodos} handleEdit={handleEdit} /> :
            <p>No Todos saved</p>
          }
        </div>
      </div>
      <tt>
        Made with 💜 by Anshu Kumar Thakur
      </tt>
    </>
  )
}

export default App
