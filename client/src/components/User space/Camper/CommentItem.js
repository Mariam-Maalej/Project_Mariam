import React from "react";
import { useDispatch } from "react-redux";
import { removeComment } from "../../../actions/hikeAction";

const CommentItem = ({ comment, hikeId }) => {
  const dispatch = useDispatch();
  return (
    <div className="comment-container">
      <div className="avatar">
        <img
          src="https://www.tours-fondettes-agrocampus.fr/wp-content/themes/groscampus/images/avatar.png"
          style={{ width: "30px" }}
        ></img>{" "}
        <p>{comment.firstName}</p>
      </div>
      <div className="content">
        {" "}
        <span className="commentText">{comment.text}</span>
        <br></br>
        <div className="options">
          <div onClick={() => dispatch(removeComment(hikeId, comment._id))}>
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
