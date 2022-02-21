import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
   const [tasks, setTasks] = useState([
      { id: 1, title: "To do list is very nice 1", completed: false },
      { id: 2, title: "To do list is very nice 2", completed: true },
      { id: 3, title: "To do list is very nice 3", completed: true },
   ]);

   //  add task method
   const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000 + 1);
      const newTask = { id, ...task };

      // update tasks
      setTasks([...tasks, newTask]);
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
      console.log(completedTask);
   };

   // show tasks are done
   const showCompletedTasks = () => {
      const tasksDone = tasks.filter((item) => item.completed === true);
      console.log(tasksDone);
   };

   return (
      <div className="container">
         <Header addTask={addTask} />
         <TodoList
            tasks={tasks}
            onDelete={deleteTask}
            onClear={clearCompletedTask}
         />
         <TodoFilter onShow={showCompletedTasks} />
         <Footer />
      </div>
   );
}

export default App;
