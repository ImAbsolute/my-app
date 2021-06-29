import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Task from './components/Task';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [appState, setAppState] = React.useState();

  React.useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL).then((resp) => {
      if (resp.status === 200) {
        setAppState(resp.data);
      }
    });
  });

  const getTasksFromServer = () => {
    setTodos([...todos, ...appState]);
  };

  React.useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodo = (todoTitle) => {
    if (todoTitle) {
      setTodos([
        ...todos,
        {
          id: Math.random().toString().substr(2, 9),
          title: todoTitle,
          completed: false,
        },
      ]);
    }
    console.log(todos);
  };

  const deletTask = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => (todo.id === id
        ? { ...todo, completed: !todo.completed } : { ...todo })),
    ]);
  };

  const editTodo = (editId, editTitle) => {
    setTodos((todo) => todo.map((item) => (item.id === editId
      ? { id: editId, title: editTitle, completed: false }
      : item)));
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <div className="list">
        <Task
          todos={todos}
          deletTask={deletTask}
          handleToggle={handleToggle}
          editTodo={editTodo}
        />
      </div>
      <Button variant="outlined" onClick={getTasksFromServer}>
        Get tasks
      </Button>
    </div>
  );
}

export default App;
