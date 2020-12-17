import {
  GET_HIKES,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
  COMMENT_ERROR,
  GET_COMMENT,
  HIKE_ERROR,
} from "./actionsType";
import axios from "axios";

//Get all Hikes
export const getHikes = () => (dispatch) => {
  axios
    .get("/camp/showAll")
    .then((res) => dispatch({ type: GET_HIKES, payload: res.data }))
    .catch((error) => console.log(error));
};

//Add Hike
export const addHike = (newHike) => async (dispatch) => {
  try {
    await axios.post("/camp/addHike", newHike);
    dispatch(getHikes());
  } catch (error) {
    dispatch({ type: HIKE_ERROR });
    alert("Add failed try again!");
    console.log(error);
  }
};
//Edit Hike
export const editHike = (hikeId, updated) => async (dispatch) => {
  try {
    axios.put(`/camp/editHike/${hikeId}`, updated);
    dispatch(getHikes());
  } catch (error) {
    console.log(error);
  }
};
//Delete hike
export const deleteHike = (hikeId) => async (dispatch) => {
  try {
    axios.delete(`/camp/deleteHike/${hikeId}`);
    dispatch(getHikes());
  } catch (error) {
    console.log(error);
  }
};

//Add like
export const addLike = (hikeId) => async (dispatch) => {
  try {
    const res = await axios.put(`/camp/like/${hikeId}`);
    dispatch({ type: UPDATE_LIKES, payload: { hikeId, likes: res.data } });
  } catch (error) {
    console.error(error.message);
  }
};

//Remove like
export const removeLike = (hikeId) => async (dispatch) => {
  try {
    const res = await axios.put(`/camp/unlike/${hikeId}`);
    dispatch({ type: UPDATE_LIKES, payload: { hikeId, likes: res.data } });
  } catch (error) {
    console.error(error.message);
  }
};
//Add comment
export const addComment = (hikeId, { text }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const newData = JSON.stringify({ text });
  try {
    const res = await axios.post(`/camp/addComm/${hikeId}`, newData, config);
    dispatch({
      type: ADD_COMMENT,
      payload: { hikeId, comments: res.data },
    });
  } catch (error) {
    console.error(error.message);
  }
};

//Delete comment
export const removeComment = (hikeId, commentId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/camp/delComment/${hikeId}/${commentId}`);
    dispatch(getComment(hikeId));
  } catch (error) {
    console.error(error.message);
    dispatch({ type: COMMENT_ERROR });
  }
};
// get all comments for one hike
export const getComment = (hikeId) => async (dispatch) => {
  try {
    const res = await axios.get(`/camp/allComments/${hikeId}`);
    dispatch({ type: GET_COMMENT, payload: { hikeId, comments: res.data } });
  } catch (error) {
    console.log(error);
    dispatch({ type: COMMENT_ERROR });
  }
};
