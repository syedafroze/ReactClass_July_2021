import "./App.css";
import FunctionalComponent from "./Components/functionalComp";
import ClassComponent from './Components/classComp';
import F1 from './Props/f1'
import CB from './LifeCycleMethods/ClassB';
import List from "./ListRendering/list";
import Todo from "./TodoList/todo";
import ClassA from './PureComponent/classA';
import Counter from './HighOrderComponent/Counter'
import Hover from "./HighOrderComponent/Hover";
import FetchData from "./Apis/fetchData";
function App() {
  return (
    <div className="App">
      <h2>React</h2>
      {/* <FunctionalComponent></FunctionalComponent>
      <ClassComponent></ClassComponent>
      <F1></F1>
      <CB></CB> */}
      {/* <List></List> */}
      {/* <Todo></Todo> */}
      {/* <ClassA></ClassA> */}
      {/* <Counter></Counter>
      <Hover></Hover> */}
      <FetchData></FetchData>
    </div>
  );
}

export default App;
