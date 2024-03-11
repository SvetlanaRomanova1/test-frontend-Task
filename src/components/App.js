import React, {useEffect, useState} from 'react';
import './App.css';
import Task from "./Task";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {

    const [tasks, setTasks] = useState([]);

    //Записываем в LocalStorage при добавлении новой задачи
    const handleAddTask = (text) => {
        const newTask = {id: Date.now(), text, completed: false};
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };


    //Записываем в LocalStorage при удалении задачи
    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    // При изменении статуса задачи
    const handleToggleTask = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, [])

    return (
        <div className="App">
            <TaskForm onAddTask={handleAddTask}/>
            <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask}/>
        </div>
    );
}

export default App;
