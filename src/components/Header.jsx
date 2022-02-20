import React from "react";
import AddTodoForm from "./AddTodoForm";

const Header = ({ addTask }) => {
   return (
      <div className="header">
         <h1 className="title">todo</h1>
         <AddTodoForm addTask={addTask} />
      </div>
   );
};

export default Header;
