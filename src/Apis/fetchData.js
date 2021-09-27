import React from "react";
import Axios from 'axios' ;
class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  handleFetch = () => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((result) => this.setState({list:result}));

    Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>this.setState({list:response.data}))
  };

  render() {
      console.log(this.state.list)
    return (
      <div>
        <h2>Get Data using Fetch api </h2>
        <button onClick={this.handleFetch}>GetData</button>
        <ul>
          {this.state.list.map((userObject, index) => (
            <li key={userObject.id}>{userObject.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchData;

/*
{
    name:"syed",
    id:7
}

*/
