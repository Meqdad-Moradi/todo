import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const TodoList = ({ tasks }) => {
   return (
      <div className="todo-list-container">
         <ul className="todo-list">
            {tasks.map((item, index) => {
               const { id, name } = item;

               return (
                  <li className="todo-item" key={index}>
                     <span className="complete active">
                        <FaCheck className="check" />
                     </span>
                     {name}
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
            <p>Cleare completed</p>
         </div>
      </div>
   );
};

export default TodoList;
