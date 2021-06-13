import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { Delete } from "@material-ui/icons";
import { AiFillEdit } from "react-icons/ai";
import TodoForm from "./TodoForm";

export default function Task({
  title,
  id,
  completed,
  deletTask,
  handleToggle,
  editTodo,
}) {
  const [edit, setEdit] = React.useState({
    id: null,
    title: "",
  });

  const handleEdit = (event, value) => {
    if (event.key === "Enter") {
      editTodo(edit.id, value);
      setEdit({
        id: null,
        title: "",
      });
    }
  };

  if(edit.id){
    return <TodoForm edit={edit} handleEdit={handleEdit}/>
  }

  return (
    <div className="task">
      <Checkbox
        checked={completed}
        inputProps={{ "aria-label": "primary checkbox" }}
        onChange={() => handleToggle(id)}
      />
      <p>{title}</p>
      <div className="edit">
        <AiFillEdit onClick={() => setEdit({ id: id, title: title})  } />
      </div>
      <IconButton aria-label="delete" onClick={() => deletTask(id)}>
        <Delete />
      </IconButton>
    </div>
  );
}
