import React, { Component } from "react";
import StreamingService from "./contracts/StreamingService.json";
import getWeb3 from "./getWeb3";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
  state = { web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = StreamingService.networks[networkId];
      const instance = new web3.eth.Contract(
        StreamingService.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error);
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Routes status={this.state.web3} config={{ accounts: this.state.accounts, contract: this.state.contract }} />
      </BrowserRouter>
    );
  }
}

export default App;