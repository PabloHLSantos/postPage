import styles from '../Modules/Comment.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface controleIdPost{
    postId: Number;
}

export function Comment({ postId }:controleIdPost) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommentsForPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        setComments(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommentsForPost();
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (comments.length === 0) {
    return <p>No comments found for post with ID: {postId}</p>;
  }
    return(
        <div className={styles.comment}>
          <div className={styles.commentBox}>
                  <div className={styles.commentContent}>
                      <header>
                          <div>
                            <ul className={styles.commentContent}>
                                {comments.map(comment => (
                                    <li key={comment.id}>
                                        <strong>{comment.name}</strong>: {comment.body}
                                    </li>
                                ))}
                             </ul>                            
                          </div>
                      </header>
                  </div>
              </div>
        </div>
    );
}