import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
  return (
    <React.Fragment>
      <div className="container">
        <TodoCounter />
        <TodoSearch />

        <TodoContext.Consumer>
          {({ 
            error, 
            loading, 
            searchedTodos, 
            completeTodo, 
            deleteTodo 
          }) => (
            <TodoList>
              {error && <p>Hubo un error..</p>}
              {loading && <p>Estamos cargando..</p>}
              {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}
              {searchedTodos.map((i) => (
                <TodoItem
                  key={i.text}
                  text={i.text}
                  completed={i.completed}
                  onComplete={() => completeTodo(i.text)}
                  onDelete={() => deleteTodo(i.text)}
                />
              ))}
            </TodoList>
          )}
        </TodoContext.Consumer>

        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export { AppUI };