import { useEffect, useState } from 'react';
import { getAllPost } from '../services/posts';

export function usePosts () {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchPosts = async () => {
            const allPosts = await getAllPost();
            setPosts(allPosts);
            setLoading(false)
        };
        fetchPosts();
    }, []);

    return { posts, loading };
}