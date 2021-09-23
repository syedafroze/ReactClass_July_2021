import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: "ajay", id: 7 },
        { name: "Srini", id: 1 },
        { name: "Syed", id: 4 },
        { name: "Kalyani", id: 5 },
      ],
    };
  }

  handleClick = () => {
    let sorted = [].concat(this.state.list);
    sorted.sort((obj1, obj2) => obj1.id - obj2.id);
    this.setState({ list: sorted });
  };
  render() {
    return (
      <div>
        <h2>List Rendering</h2>
        <button onClick={this.handleClick}>Sort</button>
        <ul>
          {this.state.list.map((value) => (
            <li>
              {value.name} {value.id}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
