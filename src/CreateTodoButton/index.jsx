import { React } from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {
  const onbuttonclick = () => {
    console.log('algo')
  };

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => onbuttonclick}
    >+</button>
  );
}

export { CreateTodoButton };