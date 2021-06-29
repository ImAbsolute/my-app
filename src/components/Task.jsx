import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import { Delete } from '@material-ui/icons';
import { AiFillEdit } from 'react-icons/ai';
import TodoForm from './TodoForm';

export default function Task({
  todos,
  deletTask,
  handleToggle,
  editTodo,
}) {
  const [edit, setEdit] = React.useState({
    id: null,
    title: '',
  });

  const handleEdit = (event, value) => {
    if (event.key === 'Enter') {
      editTodo(edit.id, value);
      setEdit({
        id: null,
        title: '',
      });
    }
  };

  if (edit.id) {
    return <TodoForm edit={edit} handleEdit={handleEdit} />;
  }

  return (
    todos.map((todo) => (
      <div className="task" key={todo.id}>
        <Checkbox
          checked={todo.completed}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          onChange={() => handleToggle(todo.id)}
        />
        <p>{todo.title}</p>
        <div className="edit">
          <AiFillEdit onClick={() => setEdit({ id: todo.id, title: todo.title })} />
        </div>
        <IconButton aria-label="delete" onClick={() => deletTask(todo.id)}>
          <Delete />
        </IconButton>
      </div>
    ))
  );
}
