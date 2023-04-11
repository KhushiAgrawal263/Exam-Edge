import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  const URL = "http://localhost:8000/api";
  console.log(URL);
  dispatch(loginStart());
  try {
    const res = await axios.post(`${URL}/auth/login`, user);
    console.log(res);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
