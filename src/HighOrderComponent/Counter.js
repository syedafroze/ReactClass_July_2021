import React from 'react';
import UpdateComponent from './updateFunction';
class Counter extends React.Component{
  

    render(){
        console.log(this.props)
        return <div>
            <h2> Counter Component Count is {this.props.state.count}</h2>
          <button onClick={this.props.handleCount}>Increment count </button>
        </div>
    }
}

export default UpdateComponent(Counter); 