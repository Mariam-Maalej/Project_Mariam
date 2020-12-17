import { ADD_BOOKING, BOOKING_FAIL, GET_BOOKING } from "./actionsType";
import axios from "axios";

//Add booking
export const addBooking = (hikeId, { fullName, phone, place }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const newData = JSON.stringify({ fullName, phone, place });
  try {
    const res = await axios.post(`/camp/addBooking/${hikeId}`, newData, config);
    dispatch({ type: ADD_BOOKING, payload: { bookings: res.data } });
  } catch (error) {
    console.log(error);
    dispatch({ type: BOOKING_FAIL });
  }
};
//get bookings
export const getBooking = (hikeId) => async (dispatch) => {
  try {
    const res = await axios.get(`/camp/allBookings/${hikeId}`);
    dispatch({ type: GET_BOOKING, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: BOOKING_FAIL });
    alert("Sorry booking impossible");
  }
};
