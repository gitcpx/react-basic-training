import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import UpdateTodo from './UpdateTodo';

function App() {

  const [todos, setTodo] = useState ([]);
  const [val, setVal] = useState ('');
  const [editIndex, setEditIndex] = useState (-1);
  const handleChangeVal = (e) => setVal (e.target.value);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodoList = [...todos, val]
    setTodo(newTodoList);
    setVal('');
    setEditIndex(-1);
    document.getElementById('todo-input').value = '';
  }



    if (editIndex > -1) {
        /* show edit-page */
          return (
            <div className="App">
              <header className="App-header">

                    <form className="todo-form">
                        <input id="todo-input" placeholder="Add a todo"
                        type="text"
                        onChange={handleChangeVal}/>
                        <button type="submit" className="todo-button undefined"
                            onClick={addTodo}>Add todo</button>
                    </form>

                    <div className="todo-edit">
                        <UpdateTodo todos={todos} setEditIndex={setEditIndex}
                            editIndex={editIndex}/>
                    </div>

              </header>


            </div>
          );
    } else {
        /* show list */
      return (
        <div className="App">
          <header className="App-header">

                <form className="todo-form">
                    <input id="todo-input" placeholder="Add a todo"
                    type="text"
                    onChange={handleChangeVal}/>
                    <button type="submit" className="todo-button undefined"
                        onClick={addTodo}>Add todo</button>
                </form>

                <div className="todo-rows">
                    <TodoList todos={todos} setTodo={setTodo} setEditIndex={setEditIndex}/>
                </div>

          </header>


        </div>
      );
  }
}

export default App;
