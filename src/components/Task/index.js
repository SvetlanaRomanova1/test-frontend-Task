import { DeleteButton } from "../../components/icons/index";
import "./style.css";

function Task({task, text, onDelete, onToggle }) {

    const handleDeleteClick = () => {
        onDelete(task.id);
    }

    const handleToggleClick = () => {
        onToggle(task.id)
    }

    return (
        <div className="task__container">
            <p className="task__text">{text}</p>
            <div className="task__wrapper">
                <label>
                    <input
                        type="checkbox"
                        className="task__input"
                        onChange={handleToggleClick}
                        checked={task.completed}
                    />
                </label>
                <button className="task__delete-button" onClick={handleDeleteClick}>
                    <DeleteButton />
                </button>
            </div>
        </div>
    )
}

export default Task;
