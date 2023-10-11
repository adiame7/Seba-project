import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

const App = () => {
  const [taskList, setTasklist] = useState([]);
  return (
    <div className="flex flex-col">
      <Form setTasklist={setTasklist} />
      <List tasks={taskList} />
    </div>
  );
};

export default App;
