import LoaderHOC from './LoaderHOC'
export function Post(props) {

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {props.posts.map(post => <li key={post.id}>{post.id}.{post.title}</li>)}
      </ul>
    </div>
  )
}

export default LoaderHOC(Post,'posts')
