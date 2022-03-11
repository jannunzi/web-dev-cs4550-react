import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
const Todos = () => {
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState({do: ''});
  const dispatch = useDispatch();
  const createTodoClickHandler = () => {
    const action = {
      type: 'create-todo',
      todo
    };
    dispatch(action);
  }


  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue
    };
    setTodo(newTodo);
  }
  return(
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control"/>
        </li>
        {
          todos.map(todo =>
            <li className="list-group-item">
              {todo.do}
            </li>
          )
        }
      </ul>
    </>
  );
};
export default Todos;
