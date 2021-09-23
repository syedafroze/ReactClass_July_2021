import React from "react";
import ClassA from "./ClassA";

class ClassB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      flag: true,
    };
  }

  handleClick = () => {
    this.setState({ num: this.state.num + 1 });
  };

  handleUnMount=()=>{
      this.setState({flag:!this.state.flag})
  }

  render() {
    return (
      <div>
        <h2> Num is {this.state.num}</h2>
        <button onClick={this.handleClick}>INC Num</button>
        {this.state.flag ?  <ClassA num={this.state.num}></ClassA> :null}
        <button onClick={this.handleUnMount}>{this.state.flag?"Unmount":"mount"}</button>
      </div>
    );
  }
}

export default ClassB;
