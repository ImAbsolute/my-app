import React from "react";
import Task from "./components/Task";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: "1", completed: false },
  ]);

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
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      ),
    ]);
  };

  const editTodo = (editId, editTitle) => {
    setTodos((todo) =>
      todo.map((item) => (item.id === editId ? editTitle : item))
    );
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <div className="list">
        {todos.map((item) => (
          <Task
            key={item.id}
            {...item}
            deletTask={deletTask}
            handleToggle={handleToggle}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
