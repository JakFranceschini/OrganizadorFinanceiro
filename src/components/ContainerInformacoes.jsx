import React from "react";
import "./ContainerInformacoes.css";
import IconeMais from "../img/iconeMais.png";
import IconeMenos from "../img/iconeMenos.png";

function ContainerInformacoes() {
    return(
        <div className="containerInformacoes">
            <div className="containerCards">
                <div className="card">
                    <h2>Total do mês</h2>
                    <label id="labelTotalMes">R$ 1.267,80</label>
                </div>
                <div className="card">
                    <h2>Receita do mês</h2>
                    <label id="labelReceitaMes">R$ 2.500,00</label>
                    <button id="botaoAddReceita">Add receita<img src={IconeMais}/></button>
                </div>
                <div className="card">
                    <h2>Despesa do mês</h2>
                    <label id="labelDespesaMes">R$ 1.232,20</label>
                    <button id="botaoAddDespesa">Add despesa<img src={IconeMenos}/></button>
                </div>
            </div>
            <div className="containerTotal">
                <label>Total acumulado</label>
                <label id="labelTotalAcumulado">+ R$ 8.523,44</label>
            </div>
        </div>
    );
}

export default ContainerInformacoes;