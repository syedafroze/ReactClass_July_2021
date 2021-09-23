import React from 'react';

class ClassComp extends React.Component{
    constructor(){
        super();
       //this.name="Syed"
       this.state={
           name:"Pragyan"
       }
    }

    handleClick=()=>{
      // this.state.name = this.state.name.toUpperCase();

      this.setState({name:this.state.name.toUpperCase()})
       
    }

    render(){
        return <div>
            <h2>This is Class Comp created by {this.state.name} </h2>
            <button onClick={this.handleClick}>toUpperCase</button>
        </div>
    }
}



export default ClassComp ; 