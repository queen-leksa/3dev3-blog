import React, {useState, useContext} from "react";
import Modal from "../Modal";
import "./style.css";
import {Ctx} from "../../App";

export default () => {
    const [modalView, setModal] = useState(false);
    const [modalAuth, setModalAuth] = useState(true);
    const {userId, userName, updUId, updUName} = useContext(Ctx);

    const logOut = (e) => {
        e.preventDefault();
        updUId("");
        updUName("");
        localStorage.removeItem("userId"); 
        localStorage.removeItem("author"); 
    }

    return <header>
        <a href="/" className="header__logo">DevsBlog</a>
        <nav className="header__menu">
            <a href="/" className="header__btn">Create post</a>
            {!userId && <a href="/" 
                className="header__btn" 
                onClick={(e) => {
                    e.preventDefault();
                    setModal(!modalView);
                    setModalAuth(true);
                }}
            >Sign in</a>}
            {!userId && <a href="/" 
                className="header__btn" 
                onClick={(e) => {
                    e.preventDefault();
                    setModal(!modalView);
                    setModalAuth(false);
                }}
            >Sign up</a>}
            {userId && <a href="/">{userName}</a>}
            {userId && <a href="/" onClick={logOut}>Log Out</a>}
        </nav>
        {<Modal state={modalView} auth={modalAuth} updState={setModal}/>}
    </header>
}