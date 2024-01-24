const API_URL = 'https://jsonplaceholder.typicode.com'

export const getAllPost = async () => {
    const response = await fetch(`${API_URL}/posts`)
    const json = await response.json()
    const posts = json || [];
    return posts
}