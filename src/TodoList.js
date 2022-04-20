import './TodoList.css';

function TodoList(props) {

   function removeTodo (e, index) {
           e.preventDefault();
           const newTodoList = [...props.todos];
           console.log('You clicked \'remove todo\' on [' + newTodoList + '].');
           newTodoList.splice(index, 1);
           console.log(newTodoList);
           props.setTodo(newTodoList);
   }

   function editTodo (e, index) {
          e.preventDefault();
          props.setEditIndex (index);
   }

   const listItems = props.todos && props.todos.map((todo, index) =>
        <div className="todo-row" key={index}>
            <div>{index} : {todo}</div>
            <div className="icons">
                <button type="submit" className="remove-button"
                            onClick={(e) => removeTodo(e, index)}>remove todo</button>
                <button type="submit" className="edit-button"
                            onClick={(e) => editTodo(e, index)}>edit todo</button>
            </div>
        </div>
  );
  return listItems;
}

export default TodoList;

