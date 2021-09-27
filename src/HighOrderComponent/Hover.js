import React from "react";
import UpdateComponent from "./updateFunction";
class Hover extends React.Component {
  
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.handleCount}>Hover Component Count is {this.props.state.count}
        </h2>
      </div>
    );
  }
}

export default UpdateComponent(Hover);
