require("dotenv").config()
var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ropsten:{
      provider:function(){
        return new HDWalletProvider("violin isolate train barely swamp erosion benefit marble garment pupil oblige student","https://ropsten.infura.io/v3/dfaed9e96792434889482d3de7450c39")
      },
      gasPrice:2500000000,
      network_id:3
    },
    solc:{
      optimizer:{
        enabled:true,
        runs:200
      }
    }
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*" // Match any network id
    // }
  }
};
