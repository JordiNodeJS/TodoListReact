import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './TodoApp.css'
import { useEffect } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const init = () => JSON.parse(localStorage.getItem('todos')) || []

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = todo => {
    dispatch({
      type: 'remove',
      payload: todo,
    })
  }
  const handleToggle = todo => {
    dispatch({ type: 'toggle', payload: todo })
  }

  const handleAddTodo = newTodo => dispatch({ type: 'add', payload: newTodo })

  return (
    <>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList valuesTodo={{ todos, handleToggle, handleDelete }} />
        </div>
        <div className='col-5'>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  )
}
