import React from 'react';
import ClassB from './classB'
import F1 from './F1'
class ClassA extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:2
        }
    }

    handleCount=()=>{
        this.setState({count:this.state.count+1})
    }

    
   componentDidMount(){
       setInterval(()=>this.setState({count:this.state.count}),2000)
   }

    render(){
        return (
          <div>
            <h2>Class A in Pure Comp</h2>
            <h3>Count is {this.state.count}</h3>
            <button onClick={this.handleCount}>Inc Count</button>
            <ClassB count={this.state.count}></ClassB>
            <F1 count={this.state.count}></F1>
          </div>
        );
    }
}


export default ClassA