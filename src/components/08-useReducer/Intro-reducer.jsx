const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
]

// const todoReducer = (state = initialState, action) =>
//   action?.type === 'add' ? [...state, action.payload] : state

const todoReducer = (state = initialState, action) =>
  action?.type == 'add' ? [...state, action.payload] : state

let todos = todoReducer()

const newTodo = [
  {
    id: 2,
    todo: 'Comprar leche',
    done: true,
  },
]

const action = {
  type: 'add',
  payload: newTodo,
}

todos = todoReducer(todos, action)

console.log(todos)
