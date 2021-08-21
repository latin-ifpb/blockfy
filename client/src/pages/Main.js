import React, { useState } from 'react';
import './style.css';
import Button from '../components/Button';
import Input from '../components/TextField';
import Form from '../components/Form';
import Display from '../components/Display';
import { useHistory } from "react-router-dom";

const Main = ({ status, config }) => {
    const history = useHistory();
    const [idAdd, setAddId] = useState("");
    const [addressAdd, setAddAddress] = useState("");
    const [idListen, setListenId] = useState("");
    const [addressArtist, setArtist] = useState("");
    const [idMusic, setMusic] = useState("");
    const [idMusicUser, setUser] = useState("");

    const [counterArtist, setCounterArtist] = useState(0);
    const [counterMusic, setCounterMusic] = useState(0);
    const [counterUser, setCounterUser] = useState(0);

    const addMusic = async ({ accounts, contract }) => {
        //add a music with id and artist address in smart contract.
        await contract.methods.addMusic(idAdd, addressAdd).send({ from: accounts[0] });
    };

    const listenMusic = async ({ accounts, contract }) => {
        await contract.methods.listenMusic(idListen).send({ from: accounts[0] });
    };

    const musicStats = async ({ contract }) => {
        // Get the value from the contract to prove it worked.
        const response = await contract.methods.musicStats(idMusic).call();
        setCounterMusic(response);
    };

    const artistStats = async ({ contract }) => {
        // Get the value from the contract to prove it worked.
        const response = await contract.methods.musicianStats(addressArtist).call();
        setCounterArtist(response);
    };

    const userStats = async ({ accounts, contract }) => {
        // Get the value from the contract to prove it worked.
        const response = await contract.methods.userStats(idMusicUser).call({ from: accounts[0] });
        setCounterUser(response);
    };

    const error = () => {
        alert(
            `Failed to load web3, accounts, or contract. Check console for details. (Possível solução: verifique se a extensão Metamask está instalada e se está conectada a rede de testes Rinkeby)`,
        );
    }

    return (
        <>
            <div>
                <div id="header">
                    <div>
                        <div id="logo">
                        <h1>BLOCK</h1>
                        <h1 id="fy">FY</h1>
                        </div>
                        <p id="sub">* É necessário o metamask instalado no navegador pra realizar qualquer ação.</p>
                    </div>
                    <div id="etherscan">
                    <Button name="Como instalar o metamask" onClick={() => history.push("/tutorial")} />
                        <a href="https://rinkeby.etherscan.io/address/0x22b5bd3a5cd61677e7c2de7b06e7d262444b02dd">Rastrear pelo Etherscan</a>
                    </div>
                </div>
            </div>
            <br />
            <div id='form'>
                <div className="input-group mb-3">
                    <Input value={idAdd} onChange={(e) => setAddId(e.target.value)} name="ID da música" id="txtMscAdd" />
                    <Input value={addressAdd} onChange={(e) => setAddAddress(e.target.value)} name="Address do artista" id="txtArtAdd" />
                    <Button name="Adicionar música" id="btnAdd" onClick={status ? () => addMusic(config) : () => error()} />
                </div>

                <Form value={idListen} nameTxt="ID da música" idTxt="txtListen" nameBtn="Escutar música" idBtn="btnListen" onChange={(e) => setListenId(e.target.value)} onClick={status ? () => listenMusic(config) : () => error()} />
                <Form value={addressArtist} nameTxt="Address do artista" idTxt="txtArt" nameBtn="Estatísticas do artista" idBtn="btnArt" onChange={(e) => setArtist(e.target.value)} onClick={status ? () => artistStats(config) : () => error()} />
                <Form value={idMusic} nameTxt="ID da música" idTxt="txtMsc" nameBtn="Estatísticas da música" idBtn="btnMsc" onChange={(e) => setMusic(e.target.value)} onClick={status ? () => musicStats(config) : () => error()} />
                <Form value={idMusicUser} nameTxt="ID da música" idTxt="txtUsr" nameBtn="Suas estatísticas" idBtn="btnUsr" onChange={(e) => setUser(e.target.value)} onClick={status ? () => userStats(config) : () => error()} />
            </div>
            <br />

            <div id='exibidor'>
                <Display title="O artista foi tocado:" id="artist" counter={counterArtist} />
                <Display title="A música foi tocada:" id="music" counter={counterMusic} />
                <Display title="Você ouviu esta música:" id="user" counter={counterUser} />
            </div>
        </>
    )
}

export default Main