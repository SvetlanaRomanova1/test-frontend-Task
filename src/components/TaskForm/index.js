import "./style.css";
import {useState} from "react";

function TaskForm({onAddTask}) {

    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim() !== '') {
            onAddTask(text);
            setText('');
        }
    };

    return (
        <form className="task__form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="add-task"
                placeholder="Введите вашу задачу"
                className="task__form-input"
                value={text}
                onChange={handleChange}
            />
            <button className="task__add-button" type="submit">
                Добавить задачу
            </button>
        </form>
    )
}

export default TaskForm;
