import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
   const [tasks, setTasks] = useState([
      { id: 1, name: "To so list is very nice 😀" },
      { id: 2, name: "To so list is very nice 😀" },
      { id: 3, name: "To so list is very nice 😀" },
   ]);

   const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000 + 1);
      const newTask = { id, ...task };

      setTasks([...tasks, newTask]);

      console.log(tasks);
   };

   console.log(tasks);

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
