import React from "react";
import { connect } from "react-redux";
import { INC } from "./store";
class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>

        <h2> Count is {this.props.state.count}</h2>
        <button onClick={this.props.INC_Count}>INC Count</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    INC_Count: () => dispatch({ type: "INC" ,value:this.text}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/*
{
    state:state,
    INC_Count : ()=> dispatch()
}



*/
