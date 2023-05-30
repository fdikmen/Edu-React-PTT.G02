import LoaderHOC from "./LoaderHOC"

export function Todo({todos}) {

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.id}.{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default LoaderHOC(Todo,'todos')
