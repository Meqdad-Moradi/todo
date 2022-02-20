import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddTodoForm = ({ addTask }) => {
   const [title, setTitle] = useState("");
   const [radio, setRadio] = useState(false);
   const [error, setError] = useState("");

   //    submit form
   const addItems = (e) => {
      e.preventDefault();

      if (title === "") {
         setError("Plese insert your task to do!");
         return;
      }
      addTask({ title, completed: radio });
      setTitle("");
   };

   //    check focus state of input
   useEffect(() => {
      if (title !== "" || title !== null) {
         setError("");
      }
   }, [title]);

   return (
      <div className="form-container">
         <form onSubmit={addItems}>
            <div className="form-control">
               <label htmlFor="input">
                  Create your new to do: <span>*</span>
               </label>
               <input
                  type="text"
                  id="input"
                  placeholder="New to do..."
                  value={title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
               />
               <small className={error !== "" ? "active" : ""}>{error}</small>
            </div>

            <div className="form-control check">
               <input
                  type="checkbox"
                  name="complete"
                  id="checkbox"
                  onChange={(e) => setRadio(e.currentTarget.checked)}
               />
            </div>

            <button className="submit-btn" type="submit">
               <FaPlus />
            </button>
         </form>
      </div>
   );
};

export default AddTodoForm;
