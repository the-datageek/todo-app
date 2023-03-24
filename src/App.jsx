import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { useState, useEffect } from "react";


const LOCAL_STORAGE_KEY = "todo:tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  // function to add tasks
  function addTask(taskTitle){
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }
  //  function to get data from local storage
  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    
    if(saved){
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(()=>{
    loadSavedTasks();
  },[])
  // function to make data persist
  function setTasksAndSave(newTasks){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  // function for completed task
  function toggleTaskCompleteById(taskId){
    const newTasks = tasks.map(task =>{
      if(task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);

  }

  // function to delete task
  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
    }


  return (
    <>
    
      <Header onAddTask={addTask}/>
      <Tasks 
          tasks={tasks}
          onComplete={toggleTaskCompleteById}
          onDelete={deleteTaskById}
      />
    
    </>
   
  )
}

export default App
