import Post from './Post';

const Posts = ({ posts = [], loading = false }) => {
    if (loading) {
        return (
            <h1>Loading.....</h1>
        )
    }
    return (
        <div className="max-w-4xl mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {!loading && posts.map((post) => (
                <Post key={post.id} postId={post.id} title={post.title} body={post.body}></Post>
              ))}
            </dl>
        </div>
    )
}

export default Posts