import React from "react";
import Todo from "./Todo";

const TodoList = ({ tasks, onDelete, onClear }) => {
   return (
      <div className="todo-list-container">
         <ul className="todo-list">
            {tasks.map((item, index) => {
               return (
                  <Todo
                     key={index}
                     item={item}
                     onDelete={onDelete}
                     tasks={tasks}
                  />
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
