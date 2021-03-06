import { useForm } from '../../hooks/useForm'

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  })
  const handleSubmit = e => {
    e.preventDefault()

    if (description.trim().length <= 1) return

    handleAddTodo({
      id: new Date().getTime(),
      desc: description,
      done: false,
    })

    reset()
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={description}
          className='form-control'
          type='text'
          name='description'
          placeholder='Organizate'
          autoComplete='off'
        />
        <button className='btn btn-outline-primary mt-1' type='submit'>
          Agregar
        </button>
      </form>
    </>
  )
}

export default TodoAdd
