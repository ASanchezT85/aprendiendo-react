const API_URL = 'https://jsonplaceholder.typicode.com'
// const API_KEY = '4287ad07'

export const getAllPost = async () => {
    const response = await fetch(`${API_URL}/posts`)
    const json = await response.json()
    const posts = json || [];
    return posts
}

export const detailPost = async ({ path, search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`${API_URL}/${path}`)
    const json = await response.json()
    console.log(json)
    const { post } = json
    return post

    // return posts?.map(post => ({
    //   id: post.id,
    //   title: post.title,
    //   body: post.body,
    // }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}