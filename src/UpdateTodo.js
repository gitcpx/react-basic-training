import './UpdateTodo.css';
import { useState } from 'react';

function UpdateTodo(props) {
      const [val, setVal] = useState (props.todos[props.editIndex]);
      const handleChangeVal = (e) => {
        setVal (e.target.value);
      }
      const updateTodo = (e) => {
        e.preventDefault();
        console.log('new val = ' + val);
        props.todos[props.editIndex] = val;
        props.setEditIndex(-1);
      }

  return (
    <form className="update-form">
                    <input id="update-input" type="text"
                    onChange={handleChangeVal} value={val}/>
                    <button type="submit" className="update-button undefined"
                        onClick={updateTodo}>Update</button>
    </form>
  );
}

export default UpdateTodo;

