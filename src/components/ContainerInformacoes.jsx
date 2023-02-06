import React from "react";
import { useEffect } from "react";
import "./ContainerInformacoes.css";

function ContainerInformacoes() {
    return(
        <div className="containerInformacoes">
            <div className="containerCards">
                <div className="card">
                    <h2>Receita do mês</h2>
                    <label id="labelReceitaMes">R$ 2.500,00</label>
                    <button id="botaoAddReceita">Adicionar receita</button>
                </div>
                <div className="card">
                    <h2>Total liquido do mês</h2>
                    <label id="labelTotalMes">R$ 1.267,80</label>
                    <button id="botaoDividirDinheiro">Dividir dinheiro</button>
                </div>
                <div className="card">
                    <h2>Despesa do mês</h2>
                    <label id="labelDespesaMes">R$ 1.232,20</label>
                    <button id="botaoAddDespesa">Adicionar despesa</button>
                </div>
            </div>
        </div>
    );
}

export default ContainerInformacoes;