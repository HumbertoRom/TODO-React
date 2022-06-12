import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  
  const onbuttonclick = () => {
    props.setOpenModal(prevstate => !prevstate);
  };

  return (
    <button 
      className="CreateTodoButton"
      onClick={onbuttonclick}
    >+</button>
  );
}

export { CreateTodoButton };