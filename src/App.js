import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
   // state stuff

   const [tasks, setTasks] = useState([]);
   const [status, setStatus] = useState("all");
   const [filteredTasks, setFilteredTasks] = useState([]);

   // USE EFFECT
   useEffect(() => {
      const getData = async () => {
         const res = await fetch("http://localhost:8000/todo");
         const data = await res.json();
         setTasks(data);
      };

      getData();
   }, [status]);

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
   const addTask = async (task) => {
      const res = await fetch(`http://localhost:8000/todo`, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(task),
      });

      const data = await res.json();
      setTasks([...tasks, data]);
   };

   // delete task
   const deleteTask = async (id) => {
      const item = tasks.filter((task) => task.id !== id);
      setTasks(item);

      await fetch(`http://localhost:8000/todo/${id}`, {
         method: "DELETE",
      });
   };

   // clear completed tasks
   const clearCompletedTask = async () => {
      const completedTask = tasks.filter((item) => item.completed !== true);

      await fetch(`http://localhost:8000/todo/${completedTask}`, {
         method: "DELETE",
      });

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
