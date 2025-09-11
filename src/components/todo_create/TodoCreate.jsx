import { useState, useEffect} from "react";
import styles from './todocreate.module.css';

function TodoCreate({editTodo,editableIdx, todos, setTodos, setEditTodo, setEditableIdx}){
  const [priority, setPriority] = useState("");
  const [content, setContent] = useState("");

  const handleClick = ()=>{
    if(content === "")
      window.alert("Type something in textBox and then try saving again...")
    else if(priority === '')
      window.alert("Set a proirity and then try saving again...")
    
    const now = new Date();
    const todo = {
      content: content,
      priority: priority,
      status: 1,
      createdAt: now,
    }

    let updatedTodos;

    if (editableIdx != null && editableIdx >= 0) {
      updatedTodos = [...todos];
      updatedTodos[editableIdx] = todo;
    } else {
      updatedTodos = [...todos, todo];
    }

    setTodos(updatedTodos);
    setEditTodo(null); // reset edit mode
    setEditableIdx(null);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  useEffect(() => {
    if (editTodo) 
      setContent(editTodo.content);
      setPriority(editTodo?.priority ?? priority);
  }, [editTodo]);

  return(
    <div className={styles.inputWrapper}>
      <form className={styles.newForm}>
        <textarea placeholder="Enter task here..."
        className={styles.todoContent}
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        ></textarea>
        <select name="priority" 
        value={editTodo != null ? editTodo.priority : priority}
        onChange={(e) => setPriority(e.target.value)}
        className={styles.selectpriority}
        >
          <option value="">Priority</option>                
          <option value="High">High</option>                
          <option value="Medium">Medium</option>                
          <option value="Low">Low</option>                
        </select>

        <button
        type="button"
        className={styles.saveBtn}
        onClick={handleClick}
        >
          Save
        </button>
      </form>
    </div>
  )
}

export {TodoCreate}
