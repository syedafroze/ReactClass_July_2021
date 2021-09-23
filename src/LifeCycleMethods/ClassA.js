import React from "react";

class ClassA extends React.Component {
  constructor(props) {
    super(props);
    this.name = "Kalyani";
    this.state = {
      count: 0,
      value:2,
    };
    console.log("contructor")
  }
  static getDerivedStateFromProps(props, state) {

    console.log("static getDerivedStateFromProps");
    if(props.num%2==0){
        return {count:state.count+1}
    }
    return null;
  }

  shouldComponentUpdate(props,state){
         if(props.num%2==0){
         return false;
         }
         return true;
  }

  render() {
      console.log("--render--")
    return (
      <div>
        <h2>ClassA Component Count is {this.state.count}</h2>
      </div>
    );
  }

  componentDidMount(){
      console.log("mounted");
  }

  componentDidUpdate(){
      console.log("---componentDidUpdate-----")
  }

  componentWillUnmount(){
      console.log("---component unMounted----------")
  }
}

export default ClassA;
