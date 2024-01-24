import './App.css'
import { usePosts } from './hooks/usePosts';

function App() {
  const posts = usePosts();

  return (
    <>
      <h1 className="text-3xl font-bold underline">hola mundo</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

export default App
