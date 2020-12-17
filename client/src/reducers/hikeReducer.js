import {
  GET_HIKES,
  HIKE_ERROR,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_BOOKING,
  BOOKING_FAIL,
  COMMENT_ERROR,
  GET_BOOKING,
  GET_COMMENT,
} from "../actions/actionsType";

const initialState = {
  hikes: [],
  loading: true,
  error: {},
  booked: false,
  commented: false,
  check: false,
  reservation: 0,
};

const hikeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HIKES:
      return {
        ...state,
        hikes: payload,
        loading: false,
      };
    case HIKE_ERROR:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        hikes: state.hikes.map((hike) =>
          hike._id === payload.hikeId ? { ...hike, likes: payload.likes } : hike
        ),
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        hikes: state.hikes.map((hike) =>
          hike._id === payload.hikeId ? { ...hike, comments: payload.comments } : hike
        ),
        loading: false,
        commented: true,
      };
    case COMMENT_ERROR:
      return {
        ...state,
        commented: false,
        loading: false,
      };
    case REMOVE_COMMENT:
      return {
        ...state,

        hikes: state.hikes.map((hike) =>
          hike._id === payload.hikeId
            ? hike.comments.filter((comment) => comment._id !== payload.commentId)
            : hike
        ),

        loading: false,
      };
    case GET_COMMENT:
      return {
        ...state,
        comments: { ...state.hikes.comments, comments: payload },
      };
    case ADD_BOOKING:
      return {
        ...state,
        hikes: state.hikes.map((hike) =>
          hike._id === payload ? { ...hike, bookings: payload.bookings } : hike
        ),
        booked: true,
      };
    case GET_BOOKING:
      return {
        ...state,
        hikes: state.hikes.map((hike) =>
          hike._id === payload ? { ...hike, bookings: payload.bookings } : hike
        ),
        check: true,
      };
    case BOOKING_FAIL:
      return {
        ...state,
        booked: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default hikeReducer;
