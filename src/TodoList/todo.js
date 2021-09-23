import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            text:''
        }
       
    }

    handleChange=(event)=>{
       this.setState({ text: event.target.value });
    }
    handleClick=()=>{
    this.setState({list:this.state.list.concat(this.state.text)});//
    this.setState({text:''});//
    }
    handleDelete=(index)=>{
       let updatedList = [...this.state.list];
       updatedList.splice(index, 1);
       this.setState({list:updatedList})
    }

    render(){
        return <div>
            <h2> TODO LIST </h2>
            <input onChange={this.handleChange} value={this.state.text} ></input>
            <button onClick={this.handleClick}>Enter</button>
            <ul>{this.state.list.map((val,index)=><><li key={index}>{val}</li> <button onClick={()=>this.handleDelete(index)}>Delete</button></> )}</ul>
        </div>
    }
}

export default Todo