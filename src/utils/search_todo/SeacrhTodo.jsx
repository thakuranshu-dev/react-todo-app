import { useEffect, useState } from "react";
import styles from './searchtodo.module.css';
function SearchBar({setSearch}){
  const [searchInput, setSearchInput] = useState('');

  const onInputChange = (e)=>{
    setSearchInput(e.target.value);
  }

  const handleClick = ()=> {
    setSearch(searchInput) 
  };

  useEffect(()=>{
    const delayDebounce = setTimeout(()=>{
      setSearch(searchInput);
    }, 1000);
    
    return ()=> clearTimeout(delayDebounce);
  },  [searchInput, setSearch]);


  return(
    <div className={styles.searchWrapper}>
      <form name="searchForm" className={styles.searchForm}>
        <input 
        type="text" 
        name="searchBar" 
        placeholder="Search In Todo"
        className={styles.searchBar} 
        style={{textAlign:"left", paddingInlineStart:"10px"}}
        onChange={onInputChange} 
        />

        {/* <button 
        type="button" 
        className={styles.searchBtn} 
        onClick={handleClick}
        >Search</button> */}

    </form>
    </div>
  )
}

export {SearchBar}