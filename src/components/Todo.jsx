import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const Todo = ({ tasks, item, onDelete }) => {
   const [complete, setComplete] = useState(false);
   const { id, title } = item;

   // make task complete
   const taskCompleted = () => {
      const item = tasks.filter((task) => task.id === id);
      setComplete(!complete);
      console.log(item);
   };

   return (
      <li className={`todo-item ${complete ? "active" : ""}`}>
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
};

export default Todo;
