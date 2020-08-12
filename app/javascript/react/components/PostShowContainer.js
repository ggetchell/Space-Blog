import React, { useState, useEffect } from "react";
import PostShow from "./PostShow";
import CommentFormConatiner from "./CommentFormContainer";

const PostShowContainer = (props) => {
  const [post, setPost] = useState({});

  const [comments, setComments] = useState([]);

  const postId = props.match.params.id;
  useEffect(() => {
    fetch(`/api/v1/posts/${postId}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setPost(body.post);
        setComments(body.comments);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`)
      );
  }, []);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="">
      <PostShow
        key={post.id}
        id={post.id}
        title={post.title}
        story={post.story}
        comments={comments}
      />
      <CommentFormConatiner postId={postId} addComment={addComment} />
    </div>
  );
};

export default PostShowContainer;