import React from "react";
import { Link } from "react-router-dom";

const PostTile = ({ id, title, story }) => {
  return (
   
    <div className="column">
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
        </div>      
  );
};

export default PostTile;
