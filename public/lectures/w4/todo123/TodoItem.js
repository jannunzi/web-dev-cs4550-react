export const TodoItem = (todo) => {
  return(`
   <li>
     <input type="checkbox" ${todo.done?'checked':''}>
     ${todo.title}
   </li>
  `)
};

// export default TodoItem;