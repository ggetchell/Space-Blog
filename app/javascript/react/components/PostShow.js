import React from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";

const PostShow = ({ id, title, story, comments }) => {
  const postComments = comments.map((comment) => {
    return (
      <Review
        key={comment.id}
        id={comment.id}
        rating={comment.rating}
        body={comment.body}
        user={comment.commenter_name}
      />
    );
  });
  return (
    <div className="columns">
      <div className="column">
        <section className="section">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={image_url} alt="item image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h4 className="title">{title}</h4>
                <p>{story}</p>
                <div className="buttons">
                  <a href={url}>
                    <button className="button is-primary">
                      <b> ... </b>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="column">{postComments}</div>
    </div>
  );
};

export default PostShow;