import React, {useState} from "react";
import "./style.css";

export default ({state}) => {
    return <div class="modal__container" style={{
        display: state === "active" ? "flex" : "none"
    }}>
        <div class="modal">
            <h2>Модальное окно</h2>    
        </div>
    </div>
}