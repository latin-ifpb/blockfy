import React from 'react';
import Card from '../components/Card';
import './style.css';
import tutorial1 from "../images/1.png";
import tutorial2 from "../images/2.png";
import tutorial3 from "../images/3.png";
import tutorial4 from "../images/4.png";
import tutorial5 from "../images/5.png";
import tutorial6 from "../images/6.png";
import tutorial7 from "../images/7.png";
import tutorial8 from "../images/8.png";
import tutorial9 from "../images/9.png";

const Tutorial = () => {
    return (
        <div id="tutorial">
            <br />
            <div className="titleTutorial">
                <img src="https://lh3.googleusercontent.com/AWXpXmPH-dW_tkkj1eKu4EYA_HUE76CvMyYHp_MhiWbvS5VpgJWsC1pDRpbocc3EmGwELvh4A2g=w128-h128-e365" alt="Raposa do Metamask"/>
                <h1>Tutorial do Metamask:</h1>
            </div>

            <br />
            <div id="manualMetamask">
                <Card image={tutorial1} instruction="1. Na loja do seu navegador pesquise pela extensão Metamask" />
                <Card image={tutorial2} instruction="2. Clique em adicionar extensão" />
                <Card image={tutorial3} instruction="3. Abrirá a tela de boas vindas, clique em próximos passos" />
                <Card image={tutorial4} instruction="4. (Se não tiver) crie uma carteira metamask" />
                <Card image={tutorial5} instruction="5. O Metamask dirá o que ele terá acesso em sua máquina, clique em I agree para a aplicação funcionar" />
                <Card image={tutorial6} instruction="6. Crie uma senha de no mínimo 8 caracteres e marque a caixinha dos termos de uso" />
                <Card image={tutorial7} instruction="7. Aparecerá um jogo de palavras que é uma chave de backup, veja se quiser, mas pode pular (é possível recuperar essa chave depois)" />
                <Card image={tutorial8} instruction="8. O Metamask abrirá a tela inicial" />
                <Card image={tutorial9} instruction="9. Troque para a Rede de Testes Rinkeby e dê F5 para abrir a aplicação" />
            </div>
            <br />
        </div>
    )
}

export default Tutorial