import React from "react";

const Comment = ({ id, rating, body, user, postId }) => {
  const onChangeDelete = event => {
    event.preventDefault()
    fetch(`/api/v1/products/${postId}/reviews/${id}.json`, {
      credentials: "same-origin",
      method: 'DELETE',
      headers: {
        'Accept': 'application.json',
        'Content-Type': 'application.json',
      },
    })
  }
  return (

      <div key={id} className="column is-one-third">
        <div className="card is-shady">
          <div className="card-content">
            <div className="content">
              <h4 className="title has-text-dark-orange">
                {user} - Rating: {rating}
              </h4>
              <p>{body}</p>
              <div className="button is-purple has-text-weight-bold" onClick={onChangeDelete}>Delete Comment</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Comment;