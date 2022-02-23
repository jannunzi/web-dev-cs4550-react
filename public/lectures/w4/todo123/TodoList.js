import {TodoItem} from "./TodoItem.js";

const todos = [
  'Learn GraphQL',
  'Learn FireBase',
  'Learn JSON',
  'Learn XML',
]


const todoObjs = [
  {title: 'Learn GraphQL', done: true},
  {title: 'Learn FireBase', done: false},
  {title: 'Learn JSON', done: true},
  {title: 'Learn XML', done: false},
]

const TodoList = () => {

  const items = todos.map(todo => {
    return TodoItem(todo);
  }).join('')

  return(`
    <ul>
      ${todoObjs.map(todo => TodoItem(todo)).join('')}
    </ul>
  `);
}

export default TodoList