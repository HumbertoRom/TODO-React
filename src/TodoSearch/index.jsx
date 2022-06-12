import React from 'react';
import './TodoSearch.css';

function TodoSearch({ search, setSearch }){

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