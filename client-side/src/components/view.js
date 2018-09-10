import React, { Component } from "react";
import Grid from "./Grid.js";
class view extends Component {
    constructor(){
        super();
        this.state={
            arr:[]
        }
        
    }
    componentDidMount() {
        this.getHashes();
    }
    getHashes= async () => {
       var counter=null; 
       await this.props.user.contract.methods.getCounter(this.props.user.accounts[0]).call().then(res=>{
         counter=res;
       });
       console.log(counter);
       for(var i=0;i<counter;i++){
           const obj=await this.props.user.contract.methods.getHash(this.props.user.accounts[0],i).call();
           this.setState({
            arr: [...this.state.arr, obj]
          })
          
       }
    }
    render() {
        return(
            <div>
                <Grid list={this.state.arr}/>
            </div>
        );
    }
}
export default view;