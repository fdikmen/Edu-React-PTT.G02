import LoaderHOC from './LoaderHOC'
export function User({users}) {

  return (
    <div>
      <h1>Users</h1>
          <ul>
            {users.map(user => <li key={user.id}>{user.id}.{user.name}</li>)}
          </ul>
    </div>
  )
}

export default LoaderHOC(User,'users')
