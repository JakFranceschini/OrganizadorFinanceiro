import React from "react";
import "./SideBar.css";
import IconeSideBarDashboard from "../img/iconeSideBarDashboard.png";
import IconeSideBarReceitas from "../img/iconeSideBarReceitas.png";
import IconeSideBarDespesas from "../img/iconeSideBarDespesas.png";
import IconeSideBarTransacoes from "../img/iconeSideBarTransacoes.png";

function SideBar() {
    return(
        <div className="sideBar">
            <h1>MyFinance</h1>

            <ul>
                <li><a href="#"><img src={IconeSideBarDashboard}/>Dashboard</a></li>
                <li><a href="#"><img src={IconeSideBarReceitas}/>Receitas</a></li>
                <li><a href="#"><img src={IconeSideBarDespesas}/>Despesas</a></li>
                <li><a href="#"><img src={IconeSideBarTransacoes}/>Transações</a></li>
            </ul>

            <div className="container">

            </div>
        </div>
    );
}

export default SideBar;