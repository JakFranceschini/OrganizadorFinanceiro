import React from "react";
import "./ContainerTransacoes.css";

function ContainerTransacoes() {
    return(
        <div className="containerTransacoesRecentes">
            <div className="containerTituloVerMais">
                <h1>Transações do mês</h1>
                <a href="#">Ver mais</a>
            </div>
            <div className="containerTransacoesDespesa">
                <label id="labelNomeDespesa">Conta do cartão</label>
                <label id="labelValorDespesa">- R$ 720,00</label>
                <label id="labelDataDespesa">25/02/2023</label>
            </div>
            <div className="containerTransacoesReceita">
                <label id="labelNomeReceita">Salário</label>
                <label id="labelValorReceita">- R$ 2.000,00</label>
                <label id="labelDataReceita">15/02/2023</label>
            </div>
            <div className="containerTransacoesDespesa">
                <label id="labelNomeDespesa">Conta do cartão</label>
                <label id="labelValorDespesa">- R$ 720,00</label>
                <label id="labelDataDespesa">25/02/2023</label>
            </div>
            <div className="containerTransacoesDespesa">
                <label id="labelNomeDespesa">Conta do cartão</label>
                <label id="labelValorDespesa">- R$ 720,00</label>
                <label id="labelDataDespesa">25/02/2023</label>
            </div>
        </div>
    );
}

export default ContainerTransacoes;