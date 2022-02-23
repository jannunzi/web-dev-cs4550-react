import TodoList from "./TodoList.js"

$("#todo-app")
.append(`
  <h1>Todo App</h1>
  <p>Some paragraph Some paragraph Some paragraph Some paragraph Some paragraph </p>
  ${TodoList()}
`);