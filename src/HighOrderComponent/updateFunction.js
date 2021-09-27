import React from "react";

const UpdateComponent = (ActualComp) => {
  return class NewComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <ActualComp
          state={this.state}
          handleCount={this.handleCount}
        ></ActualComp>
      );
    }
  };
};


export default UpdateComponent;