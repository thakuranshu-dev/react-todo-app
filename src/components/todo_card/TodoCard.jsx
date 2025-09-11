import styles from './todocard.module.css'

function TodoCard({sr, todo, onEdit, handleDelete, onChecked}){
  const onDelete = ()=> handleDelete(sr);

  return(
    <div className={styles.todocard}
    style={{backgroundColor:"#8d7f7fff"}}>

      <div className={styles.todoHeader}>

        <span className={styles.todoSr}>
          {sr+1}.
        </span>

        <div className={styles.actionBtnGroup}>

          <button className={styles.actionBtn}
          style={{backgroundColor:"#fff", color:"#ef4444"}}
          onClick={onEdit}
          >Edit</button>

          <button className={styles.actionBtn}
          style={{backgroundColor:"#ef4444", color:"#fff"}}
          onClick={onDelete}
          >Delete</button>

        </div>

      </div>

      <p className={styles.todoContent}>
        {todo.content}
      </p>

      <div className={styles.TodoFooter}>
        <p className={styles.todoPriority}
        style={todo.priority === 'High' ? {color:"#ff0000e2"} : todo.priority === 'Medium' ? {color:"#ff7700"} : {color:"#04ff04"}}
        >Priority: {todo.priority} </p>

        <input type="checkbox" name="mark" 
        checked={todo.status === 0}
        onChange={()=>onChecked(sr)} 
        className={styles.checkBox}
        />
      </div>
    </div>
  )
}

export {TodoCard}