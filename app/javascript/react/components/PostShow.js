import React from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";

const PostShow = ({ id, title, story, comments }) => {
  const postComments = comments.map((comment) => {
    return (
      <Comment
        key={comment.id}
        id={comment.id}
        rating={comment.rating}
        body={comment.body}
        user={comment.commenter_name}
      />
    );
  });
  return (
    
    <div className="card-content">
      <div className="content">
        <h4 className="title">{title}</h4>
          <p>{story}</p>
            <div className="buttons">
                <button className="button is-primary">
                  <b> ... </b>
                  </button>
                </div>
              </div>
            
        <div className="column">{postComments}</div>
      </div>
  );  
};

export default PostShow;