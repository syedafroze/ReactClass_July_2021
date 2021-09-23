import React from "react";

class ClassB extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("--render of class B in pure comp");
    return (
      <div>
        <h2>Class B in Pure Comp</h2>
        <h3>Count recieved {this.props.count}</h3>
      </div>
    );
  }
}

export default ClassB;
