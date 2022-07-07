import TodoListItem from './TodoListItem'

const TodoList = ({ valuesTodo: { todos, handleToggle, handleDelete } }) => {
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, i) => (
        // todo, i, handleToggle, handleDelete
        <TodoListItem
          key={todo.id}
          i={i}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  )
}

export default TodoList
