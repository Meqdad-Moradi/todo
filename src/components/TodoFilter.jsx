import React from "react";

const TodoFilter = ({ setStatus, status }) => {
   const showAll = () => {
      setStatus("all");
   };

   const showActive = () => {
      setStatus("active");
   };

   const showCompleted = (e) => {
      setStatus("completed");
   };

   return (
      <div className="todo-filter-container">
         <div className="todo-filter">
            <button
               className={`filter-btn ${status === "all" ? "active" : ""}`}
               onClick={showAll}
            >
               All
            </button>
            <button
               className={`filter-btn ${status === "active" ? "active" : ""}`}
               onClick={showActive}
            >
               Active
            </button>
            <button
               className={`filter-btn ${
                  status === "completed" ? "active" : ""
               }`}
               onClick={showCompleted}
            >
               completed
            </button>
         </div>
      </div>
   );
};

export default TodoFilter;
