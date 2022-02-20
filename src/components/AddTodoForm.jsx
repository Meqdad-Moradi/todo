import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddTodoForm = ({ addTask }) => {
   const [input, setInput] = useState("");
   const [error, setError] = useState("");

   //    submit form
   const addItems = (e) => {
      e.preventDefault();

      if (input === "") {
         setError("Plese insert your task to do!");
         return;
      }
      addTask({ input });
      setInput("");
   };

   //    read input value
   const setValue = (e) => {
      setInput(e.currentTarget.value);
   };

   //    check focus state of input
   useEffect(() => {
      if (input !== "" || input !== null) {
         setError("");
      }
   }, [input]);

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
               value={input}
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
