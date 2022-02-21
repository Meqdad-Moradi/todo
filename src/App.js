import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
   // state stuff

   const [tasks, setTasks] = useState([
      { id: 1, title: "To do list is very nice 1", completed: false },
      { id: 2, title: "To do list is very nice 2", completed: true },
      { id: 3, title: "To do list is very nice 3", completed: false },
   ]);
   const [status, setStatus] = useState("all");
   const [filteredTasks, setFilteredTasks] = useState([]);

   // USE EFFECT
   useEffect(() => {
      // check the filtered todo's tasks
      const filteredTodos = () => {
         switch (status) {
            case "completed":
               const completedTasks = tasks.filter(
                  (item) => item.completed === true
               );
               setFilteredTasks(completedTasks);
               break;

            case "active":
               const activeTasks = tasks.filter(
                  (item) => item.completed === false
               );
               setFilteredTasks(activeTasks);
               break;

            default:
               setFilteredTasks(tasks);
               break;
         }
      };

      filteredTodos();
   }, [status, tasks]);

   //  add task method
   const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000 + 1);
      const newTask = { id, ...task };
      setTasks([...tasks, newTask]); // update tasks
   };

   // delete task
   const deleteTask = (id) => {
      const item = tasks.filter((task) => task.id !== id);
      setTasks(item);
   };

   // clear completed tasks
   const clearCompletedTask = (id) => {
      const completedTask = tasks.filter((item) => item.completed !== true);
      setTasks(completedTask);
   };

   return (
      <div className="container">
         <Header addTask={addTask} />
         <TodoList
            tasks={filteredTasks}
            onDelete={deleteTask}
            onClear={clearCompletedTask}
            setTasks={setTasks}
         />
         <TodoFilter status={status} setStatus={setStatus} />
         <Footer />
      </div>
   );
}

export default App;
