import React from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from '../styles';

function TodoForm({ addTodo, edit, handleEdit }) {
  const [todoTitle, setTodoTitle] = React.useState(edit ? edit.title : '');

  const classes = useStyles();

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
          <Button variant="outlined" onClick={handleSubmit} className={classes.up}>
            Add Task
          </Button>
        </>
      )}
    </div>
  );
}

TodoForm.propTypes = {
  edit: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default TodoForm;
