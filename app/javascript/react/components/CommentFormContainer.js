import React, { useState } from "react";

const CommentFormContainer = (props) => {
  const [comment, setComment] = useState({
    rating: "",
    body: "",
  });

  const [errors, setErrors] = useState("");

  let errorMessage = <p></p>;
  if (errors !== "") {
    errorMessage = <p>{errors}</p>;
  }

  const handleInputChange = (event) => {
    setComment({
      ...comment,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    addNewComment(comment);
  };

  const clearForm = () => {
    setComment({
      rating: "",
      body: "",
    });
  };

  const addNewComment = (comment) => {
    fetch(`/api/v1/posts/${props.postId}/comments`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.comment) {
          props.addComment(body.comment);
          clearForm();
        } else if (body.errors[1] === "User must exist") {
          setErrors("Please sign in to make reviews");
        } else {
          setErrors(body.errors[0]);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <div className="level">
      <div className="level-int">
        <section className="section">
          <div className="card center">
            <form className="callout secondary" onSubmit={onSubmitHandeler}>
              <p className="has-text">{errorMessage}</p>
              <h2 className="title center">New Comment</h2>
              <div className="p-b-sm">
                <label htmlFor="rating">
                  <input
                    type="integer"
                    id="rating"
                    name="rating"
                    onChange={handleInputChange}
                    placeholder="Rating, 1-5"
                    className="input"
                    size="10"
                    value={comment.rating}
                  />
                </label>
              </div>

              <div>
                <label htmlFor="body">
                  <textarea
                    cols="30"
                    type="text"
                    id="body"
                    name="body"
                    class="textarea is-primary"
                    onChange={handleInputChange}
                    placeholder="Body"
                    value={comment.body}
                  />
                </label>
              </div>

              <div className="buttons center">
                <input
                  type="submit"
                  className="button center"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommentFormContainer;