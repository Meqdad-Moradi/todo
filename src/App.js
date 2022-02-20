import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
   const [tasks, setTasks] = useState([
      { id: 1, title: "To so list is very nice" },
      { id: 2, title: "To so list is very nice" },
      { id: 3, title: "To so list is very nice" },
   ]);

   //  add task method
   const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000 + 1);
      const newTask = { id, ...task };

      // update tasks
      setTasks([...tasks, newTask]);
   };

   return (
      <div className="container">
         <Header addTask={addTask} />
         <TodoList tasks={tasks} />
         <TodoFilter />
         <Footer />
      </div>
   );
}

export default App;
