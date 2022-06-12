import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){
  const { search, setSearch } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  }

	return (
		<input 
			className="TodoSearch" 
      type="text" 
      placeholder='Busca todos..'
      value={search}
      onChange={onSearchValueChange}
    />  
	);
}

export { TodoSearch };