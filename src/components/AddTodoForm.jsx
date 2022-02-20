import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddTodoForm = ({ addTask }) => {
   const [title, setTitle] = useState("");
   const [error, setError] = useState("");

   //    submit form
   const addItems = (e) => {
      e.preventDefault();

      if (title === "") {
         setError("Plese insert your task to do!");
         return;
      }
      addTask({ title });
      setTitle("");
   };

   //    read input value
   const setValue = (e) => {
      setTitle(e.currentTarget.value);
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
            <label htmlFor="input">
               Create your new to do: <span>*</span>
            </label>
            <input
               type="text"
               id="input"
               placeholder="New to do..."
               value={title}
               onChange={setValue}
            />
            <small className={error !== "" ? "active" : ""}>{error}</small>
            <button className="submit-btn" type="submit">
               <FaPlus />
            </button>
         </form>
      </div>
   );
};

export default AddTodoForm;
