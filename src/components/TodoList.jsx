import React from "react";
import Todo from "./Todo";

const TodoList = ({ tasks, setTasks, onDelete, onClear }) => {
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
                     setTasks={setTasks}
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
