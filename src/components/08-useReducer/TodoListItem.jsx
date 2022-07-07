const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {
  return (
    <li key={todo.id} className='list-group-item'>
      <p onClick={_ => handleToggle(todo)} className={`${todo.done == true && 'complete'}`}>
        {i + 1}. {todo.desc}
      </p>
      <button onClick={_ => handleDelete(todo)} className='btn btn-danger'>
        Delete
      </button>
    </li>
  )
}

export default TodoListItem
