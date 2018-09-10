import React, { Component } from "react";
import SimpleStorageContract from "./utils/contract";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import Header from "./components/Header";
import Particles from 'react-particles-js';
import ipfs from "./utils/ipfs";
import { BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";
import Form from "./components/form";
import Progress from "./components/progress";
import "./App.css";
import View from "./components/view";
import Dialog from "./components/Dialog"
class App extends Component {
  state = { web3: null, accounts: null, contract: null,buffer:null,hash:null ,spin:false,success:false};
  componentDidMount = async () => {

    try {
      // Get network provider and web3 instance.
      const web3 = getWeb3;
      var network=await web3.eth.net.getNetworkType();
      if(network!=="ropsten") {
        throw "error";
      }
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      if(accounts.length==0){
        throw "No account found";
      }

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: SimpleStorageContract });
      this.test();
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };
  /**
   * @dev to retrive the uploaded file
   * @param {*object} event 
   */
  captureFile(event) {
    event.stopPropagation();
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer);
    }
  }
 /**
  * @dev on form submit
  * @param {*object} event 
  */
  onSubmit(event) {
    event.preventDefault()
    this.setState({spin:true});
    document.getElementsByClassName("App")[0].style.opacity=0.5;
    ipfs.files.add(this.state.buffer, (error, result) => {
      if(error) {
        console.error(error)
        return
      }
        console.log('ifpsHash', result);
        document.getElementsByClassName("App")[0].style.opacity=1;
        console.log(this.state.spin);
        this.setState({hash:result,spin:false});
        this.runExample();
    })
  }
  runExample = ()=> {
    const { accounts, contract,hash } = this.state;

    // maps the hash for the current upload file
    contract.methods.addHash(hash[0].hash,accounts[0],hash[0].size).send({
      from: accounts[0] 
    },(err,Thash)=>{
      
       contract.methods.getHash(accounts[0],1).call().then((res)=>{
        this.setState({success:true});
      });
     
    });

    // Get the value from the contract to prove it worked.
   

    // Update state with the result.
    
  };
  test=() =>{
    // const { accounts, contract,hash } = this.state;
    // contract.methods.getHash(accounts[0],1).call().then(res=>{
    //   console.log(res[1].toNumber());
    // });
   
  }
  render() {
    const particles_opt={
      particles:{
        number:{
          value:100,
          density:{
            enable:true,
            value_area:800
          }
        },
        interactivity:{
          onhover:{
            enable:true
          }
        }
      }
    }
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
      
      <div className="App">
        <Header/>
        <Particles params={particles_opt} style={{position:"fixed"}}/>
        {this.state.spin?<Progress/>:""}
        {this.state.success?<Dialog/>:""}
        {/* <iframe src="https://giphy.com/embed/jAYUbVXgESSti" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
        <Switch>
        <Route exact path='/' render={(routeProps)=>(<Form {...routeProps} submit={this.onSubmit.bind(this)} capture={this.captureFile.bind(this)}/>)}/>
        <Route exact path='/view' render={(routeProps)=>(<View user={this.state}/>)} />
        </Switch>
       
      </div>
    );
  }
}

export default App;
