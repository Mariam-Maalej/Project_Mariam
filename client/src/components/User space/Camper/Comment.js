import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../actions/hikeAction";
import { Button } from "react-bootstrap";
import "./camper.css";

const Comment = ({ hikeId }) => {
  const dispatch = useDispatch();
  const commented = useSelector((state) => state.hikeReducer.commented);
  const [comment, setComment] = useState({ text: "" });

  const { text } = comment;
  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setComment("");
  };

  const handleClick = () => {
    dispatch(addComment(hikeId, { text }));
  };
  return (
    <div className="comment-area">
      <h2 className="title">Leave a Comment</h2>
      <div className="comment">
        <form className="form-comment" onSubmit={(e) => handleSubmit(e)}>
          <textarea
            className="text-area-comment"
            name="text"
            cols="30"
            rows="4"
            placeholder="comment..."
            value={text}
            onChange={(e) => handleChange(e)}
            required
          />
          <hr></hr>
          <Button className="info-button" onClick={() => handleClick()}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Comment;
