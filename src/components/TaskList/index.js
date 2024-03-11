import "./style.css";
import Task from "../Task";

function TaskList({tasks, onDelete, onToggle}) {

    const handleDeleteTask = (taskId) => {
        console.log(handleDeleteTask)
        onDelete(taskId);
    };

    const handleToggleTask = (taskId) => {
        onToggle(taskId);
    };

    return (
        tasks.length === 0 ? (
            <p>У вас пока нет задач.</p>
        ) : (
            tasks.map((task) => (
                <Task key={task.id} task={task} text={task.text} onDelete={handleDeleteTask} onToggle={handleToggleTask}/>
            ))
        )
    )
}

export default TaskList;
