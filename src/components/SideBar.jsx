import React from "react";
import "./SideBar.css";
import IconeSideBarDashboard from "../img/iconeSideBarDashboard.png";
import IconeSideBarTransacoes from "../img/iconeSideBarTransacoes.png";
import IconeSideBarDivisao from "../img/iconeSideBarDivisao.png";

function SideBar() {
    return(
        <div className="sideBar">
            <h1>MyFinance</h1>

            <ul>
                <li><a href="#"><img src={IconeSideBarDashboard}/>Dashboard</a></li>
                <li><a href="#"><img src={IconeSideBarTransacoes}/>Transações</a></li>
                <li><a href="#"><img src={IconeSideBarDivisao}/>Dividir</a></li>
            </ul>

            <div className="container">

            </div>
        </div>
    );
}

export default SideBar;