import React, {useState} from "react";
import Modal from "../Modal";
import "./style.css";

export default () => {
    const [modalView, setModal] = useState(false);
    const [modalAuth, setModalAuth] = useState(true);
    return <header>
        <a href="/" className="header__logo">DevsBlog</a>
        <nav className="header__menu">
            <a href="/" className="header__btn">Create post</a>
            <a href="/" 
                className="header__btn" 
                onClick={(e) => {
                    e.preventDefault();
                    setModal(!modalView);
                    setModalAuth(true);
                }}
            >Sign in</a>
            <a href="/" 
                className="header__btn" 
                onClick={(e) => {
                    e.preventDefault();
                    setModal(!modalView);
                    setModalAuth(false);
                }}
            >Sign up</a>
        </nav>
        {<Modal state={modalView} auth={modalAuth} updState={setModal}/>}
    </header>
}