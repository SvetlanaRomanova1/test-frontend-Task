import React from "react";
import "./style.css";
import { CloseButton } from "../icons";

function Popup({ onClose, onDelete }) {

    const handleOnDelete = (taskId) => {
        onDelete(taskId);
        onClose();
    }

    const handleNoClick = () => {
        onClose()
    }

    return (
        <div className="popup__overlay">
            <div className="popup">
                <h3>Вы действительно хотите удалить вашу задачу?</h3>
                <button
                    className="popup__button"
                    onClick={handleOnDelete}
                >
                    Да
                </button>
                <button className="popup__button" onClick={handleNoClick}>
                    Отмена
                </button>
            </div>
            <div className="popup__close-button" onClick={onClose}>
                <CloseButton/>
            </div>
        </div>
    )
}

export default Popup;
