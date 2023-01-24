import React from "react";
import "./TopBar.css";
import IconePerfil from "../img/iconePerfil.jpg";

function TopBar() {
    return(
        <div className="topBar">
            <h1>Dashboard</h1>
            <div className="containerIconeLabel">
                <img src={IconePerfil}/>
                <label>Bem vindo, Jakson</label>
            </div>
            
        </div>
    );
}

export default TopBar;