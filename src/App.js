import Header from "./components/TodoList/Header";
import TodoList from "./views/TodoList";
import "./assets/css/index.css"
import { useState } from "react";
function App() {
  const [length,setLength] = useState(0)
  const getLength = (length) => {
    setLength(length)
    console.log(length)
  }
  return (
    <div className="App">
      <Header length={length} />
      <TodoList getLength={getLength} />
    </div>
  );
}

export default App;
