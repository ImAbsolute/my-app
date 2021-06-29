/* eslint-disable react/prop-types */
import React from 'react';
import { TextField, Button } from '@material-ui/core';

function TodoForm({ addTodo, edit, handleEdit }) {
  const [todoTitle, setTodoTitle] = React.useState(edit ? edit.title : '');

  const handleSubmit = () => {
    addTodo(todoTitle);
    setTodoTitle('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="header">
      {edit ? (
        <>
          <TextField
            name="input"
            id="outlined-basic"
            label="Edit task"
            variant="outlined"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={(event) => handleEdit(event, todoTitle)}
          />
          {/* <Button variant="outlined" onClick={handleSubmit}>
            Edit task
          </Button> */}
        </>
      ) : (
        <>
          <TextField
            name="input"
            id="outlined-basic"
            label="Task"
            variant="outlined"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button variant="outlined" onClick={handleSubmit}>
            Add Task
          </Button>
        </>
      )}
    </div>
  );
}

export default TodoForm;
