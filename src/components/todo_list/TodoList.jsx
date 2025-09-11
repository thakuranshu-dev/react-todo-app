import {useState, useEffect} from 'react';
import styles from './todolist.module.css';
import {TodoCard} from '../todo_card/TodoCard';
import { SearchBar } from '../../utils/search_todo/SeacrhTodo';
import {FilterTodo} from '../../utils/filter_todo/FilterTodo';

function TodoList( {todos, setTodos}){
  const [_search, setSearch] = useState('');
  const [filters, setFilters] = useState('');
  const [todoList, setTodoList] = useState([]);

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };
  
  const onChecked = (index) => {
    const updated = [...todos];
    updated[index].status = updated[index].status === 0 ? 1 : 0;
    setTodos(updated);
  };
  // useEffect(()=>{
  //   console.log("Filter:", filters)
  //   setTodoList(()=>{
  //     if (filters === "All" || filters === "")
  //       return todos;
  //     else {
  //       if(filters === 'High' || filters === 'Low' || filters === 'Medium')
  //         return todos.filter(todo => todo.priority === filters);
  //       else if(filters === 'Stressed')
  //         return todos.filter(todo=> getStress(todo) === 0);
  //     }
  //   })
  //   console.log(todoList)
  // },[filters])

  useEffect(() => {
    let filtered = [...todos];

    // Apply filter
    if (filters && filters !== "All") {
      if(['High','Medium','Low'].includes(filters))
        filtered = filtered.filter(todo => todo.priority === filters);
      else if (filters === "Completed")
        filtered = filtered.filter(todo => todo.status === 0);
    }

    // Apply search
    if (_search.trim() !== "") {
      const searchLower = _search.toLowerCase();
      filtered = filtered.filter(todo =>
        todo.content.toLowerCase().includes(searchLower)
      );
    }

    setTodoList(filtered);
  }, [filters, _search, todos]);

  return(
    <div className={styles.todoContainer}>
      <div className={styles.todoListHeader}>
        <SearchBar setSearch={setSearch}/>
        <FilterTodo setFilter={setFilters} />
      </div>

      <div className={styles.todolist}>
        {Array.isArray(todoList) && todoList.length > 0 ? (todoList.map((todo, idx)=>(
          <TodoCard key={idx} sr={idx} todo={todo}  handleDelete={deleteTodo} onChecked={onChecked} />
        ))) : <p>No saved ToDo found.</p>}
      </div>
    </div>
  )
}

export {TodoList}