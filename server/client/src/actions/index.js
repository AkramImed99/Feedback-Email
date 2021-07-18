import axios from "axios";
import { FETCH_USER } from "./types";
export const fetchUser = () => async (dispatch) => {
  //backend request, is connected??
  const res = await axios.get("/api/current_user");
  //rers.data on care only to the id's
  dispatch({ type: FETCH_USER, payload: res.data });
};
