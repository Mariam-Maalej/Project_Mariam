import { combineReducers } from "redux";
import authReducer from "./authReducer";
import hikeReducer from "./hikeReducer";

export default combineReducers({
  authReducer,
  hikeReducer,
});
