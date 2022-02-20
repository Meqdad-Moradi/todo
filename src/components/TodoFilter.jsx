import React from "react";

const TodoFilter = ({ onShow }) => {
   return (
      <div className="todo-filter-container">
         <div className="todo-filter">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Active</button>
            <button className="filter-btn" onClick={onShow}>
               completed
            </button>
         </div>
      </div>
   );
};

export default TodoFilter;
