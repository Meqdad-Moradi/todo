import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const Todo = ({ tasks, setTasks, item, onDelete }) => {
   const { id, title, completed } = item;

   // make task complete
   const completeHandler = async (item_id) => {
      // change COMPLETED value
      const newItem = { ...item, completed: !item.completed };

      await fetch(`http://localhost:8000/todo/${item_id}`, {
         method: "PUT",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newItem),
      });

      setTasks(
         tasks.map((task) => {
            if (task.id === id) {
               return { ...task, completed: !task.completed };
            } else {
               return task;
            }
         })
      );
   };

   return (
      <li className={`todo-item ${completed ? "active" : ""}`}>
         <span
            className={completed ? "complete active" : "complete"}
            onClick={() => completeHandler(id)}
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
