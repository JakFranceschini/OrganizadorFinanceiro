import React from "react";
import "./PaginaDashboard.css";
import SideBar from "../../components/SideBar.jsx";
import TopBar from "../../components/TopBar.jsx";
import ContainerInformacoes from "../../components/ContainerInformacoes";
import ContainerTransacoes from "../../components/ContainerTransacoes";

function PaginaDashboard() {
    return (
        <div className="paginaDashboard">
            <SideBar/>
            <div className="containerPrincipal">
                <TopBar/>
                <ContainerInformacoes/>
                <ContainerTransacoes/>
            </div>
        </div>
    );
}

export default PaginaDashboard;