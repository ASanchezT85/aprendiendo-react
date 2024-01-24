import { useEffect, useState } from 'react';
import { getAllPost } from '../services/posts';

export function usePosts () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const allPosts = await getAllPost();
            setPosts(allPosts);
        };
        fetchPosts();
    }, []);

    return posts;
}

