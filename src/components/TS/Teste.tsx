import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface idPost {
    userId: Number;
}

export function PostsByUserId({ userId }:idPost) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsByUserId = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        setPosts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsByUserId();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (posts.length === 0) {
    return <p>No posts found for user with ID: {userId}</p>;
  }

  return (
    <div>
      <h2>Posts by User ID {userId}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}