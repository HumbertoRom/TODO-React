import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div className="container">
        <TodoCounter />
        <TodoSearch />

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

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} />
      </div>
    </React.Fragment>
  );
}

export { AppUI };
