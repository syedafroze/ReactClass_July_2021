import "./App.css";
import FunctionalComponent from "./Components/functionalComp";
import ClassComponent from './Components/classComp';
import F1 from './Props/f1'
import CB from './LifeCycleMethods/ClassB';
import List from "./ListRendering/list";
import Todo from "./TodoList/todo";
import ClassA from './PureComponent/classA'
function App() {
  return (
    <div className="App">
      <h2>React</h2>
      {/* <FunctionalComponent></FunctionalComponent>
      <ClassComponent></ClassComponent>
      <F1></F1>
      <CB></CB> */}
      {/* <List></List> */}
      <Todo></Todo>
      <ClassA></ClassA>
    </div>
  );
}

export default App;
