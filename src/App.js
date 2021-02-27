import { useState } from 'react';

import data from "./data.json";

import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let newList = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(newList);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div>
      <div className="home">
        <h2>Todo's</h2>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      </div>

      <div className='task'>
        <ToDoForm addTask={addTask}/>
      </div>
      
    </div>
  );
}

export default App;