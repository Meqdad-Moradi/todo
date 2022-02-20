import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const TodoList = ({ tasks }) => {
   return (
      <div className="todo-list-container">
         <ul className="todo-list">
            {tasks.map((item, index) => {
               return (
                  <li className="todo-item" key={index}>
                     <span className="complete">
                        <FaCheck className="check" />
                     </span>
                     {item.title}
                     <span className="delete">
                        <FaTrash />
                     </span>
                  </li>
               );
            })}
         </ul>

         <div className="todo-footer">
            <p>
               <span className="total-items">{tasks.length}</span> items left
            </p>
            <p className="clear">Cleare completed</p>
         </div>
      </div>
   );
};

export default TodoList;
