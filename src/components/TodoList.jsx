import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const TodoList = ({ tasks, onDelete, onClear }) => {
   const [complete, setComplete] = useState(false);

   // make task complete
   const taskCompleted = (id) => {
      const item = tasks.filter((task) => task.id === id);
      setComplete(!complete);
      console.log(item);
   };

   return (
      <div className="todo-list-container">
         <ul className="todo-list">
            {tasks.map((item, index) => {
               const { id, title } = item;
               return (
                  <li className="todo-item" key={index}>
                     <span
                        className={complete ? "complete active" : "complete"}
                        onClick={() => taskCompleted(id)}
                     >
                        <FaCheck className="check" />
                     </span>
                     {title}
                     <span className="delete" onClick={() => onDelete(id)}>
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
            <p className="clear" onClick={onClear}>
               {tasks.length === 0 ? "No task to do" : "Cleare completed"}
            </p>
         </div>
      </div>
   );
};

export default TodoList;
