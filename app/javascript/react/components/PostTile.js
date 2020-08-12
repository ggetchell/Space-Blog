import React from "react";
import { Link } from "react-router-dom";

const PostTile = ({ id, title, story }) => {
  return (
   
    <div className="column">
      <Link to={`/posts/${id}`} className="">
        <div className="card is-shady">
          <Link to={`/posts/${id}`} className="">
            <div className="card-content">
              <div className="content">
                <h4>
                  <Link to={`/posts/${id}`} className="has-text">
                    {" "}
                    {title}{" "}
                  </Link>
                </h4>
                <p>{story}</p>
              </div>
            </div>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default PostTile;
