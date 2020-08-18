import React, { useState } from 'react'

function Input({ name, id, value, onChange }) {
    return (
        <input type="text" value={value} onChange={onChange} placeholder={name} className="form-control" id={id} />
    );
}

function Button({ name, id, onClick }) {
    return (
        <div className="input-group-append">
            <button className="btn btn-info" onClick={onClick} type="button" id={id}>{name}</button>
        </div>
    );
}

function Form({ nameTxt, idTxt, nameBtn, idBtn, onClick, value, onChange }) {
    return (
        <>
            <div className="input-group mb-3">
                <Input name={nameTxt} id={idTxt} value={value} onChange={onChange} />
                <Button name={nameBtn} id={idBtn} onClick={onClick} />
            </div>
        </>
    );
}

function Display({ id, title, counter }) {
    return (
        <div id="display">
            <div><p id="titleStats"> {title} </p></div> <br />
            <div id='circle'>
                <p className='counter' id={id}>{counter}</p>
                <p>vezes</p>
            </div>
        </div>
    );
}

const Main = ({ config }) => {
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

    return (
        <>
            <div>
                <div id="header">
                    <div id='logo'>
                        <h1>BLOCK</h1>
                        <h1 id="fy">FY</h1>
                    </div>
                    <div id="etherscan">
                        <a href="https://rinkeby.etherscan.io/address/0x22b5bd3a5cd61677e7c2de7b06e7d262444b02dd">Rastrear pelo Etherscan</a>
                    </div>
                </div>
            </div>
            <br />

            <div id='form'>
                <div className="input-group mb-3">
                    <Input value={idAdd} onChange={(e) => setAddId(e.target.value)} name="ID da música" id="txtMscAdd" />
                    <Input value={addressAdd} onChange={(e) => setAddAddress(e.target.value)} name="Address do artista" id="txtArtAdd" />
                    <Button name="Adicionar música" id="btnAdd" onClick={() => addMusic(config)} />
                </div>

                <Form value={idListen} nameTxt="ID da música" idTxt="txtListen" nameBtn="Escutar música" idBtn="btnListen" onChange={(e) => setListenId(e.target.value)} onClick={() => listenMusic(config)} />
                <Form value={addressArtist} nameTxt="Address do artista" idTxt="txtArt" nameBtn="Estatísticas do artista" idBtn="btnArt" onChange={(e) => setArtist(e.target.value)} onClick={() => artistStats(config)} />
                <Form value={idMusic} nameTxt="ID da música" idTxt="txtMsc" nameBtn="Estatísticas da música" idBtn="btnMsc" onChange={(e) => setMusic(e.target.value)} onClick={() => musicStats(config)} />
                <Form value={idMusicUser} nameTxt="ID da música" idTxt="txtUsr" nameBtn="Suas estatísticas" idBtn="btnUsr" onChange={(e) => setUser(e.target.value)} onClick={() => userStats(config)} />
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