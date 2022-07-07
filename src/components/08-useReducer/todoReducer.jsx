export const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'add':
      return [...state, payload]

    case 'remove':
      return state.filter(todo => todo.id !== payload.id)

    case 'toggle':
      return state.map(todo => (todo.id === payload.id ? { ...todo, done: !todo.done } : todo))

    default:
      return state
  }
}
