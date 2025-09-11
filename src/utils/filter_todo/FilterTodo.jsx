import { useEffect, useState } from 'react';
import styles from './filtertodo.module.css';
function FilterTodo({setFilter}){
  const filters = ['High', 'Low', 'Medium']
  const [_filter, set_filter] = useState('');

  useEffect(() => setFilter(_filter),[_filter]);

  return(
    <div className={styles.filterBar}>
      {/* <label htmlFor="category">Filter by Category: </label> */}
      <select
        name="category"
        value={_filter}
        onChange={(e) => set_filter(e.target.value)}
        className={styles.selectFilter}
      >
        <option value="All">Filter By</option>

        {filters.map(
          (filter, index) => (
            <option key={index} value={filter}>
              {filter}
            </option>
          ))
        }
        
    </select>
    </div>
  )
}

export {FilterTodo}