import { LOGINSIGNUP_REQUEST } from "../actionTypes";
import axios from "axios";

export const UserLogin = (userdata) => (dispatch) => {
  dispatch({ type: LOGINSIGNUP_REQUEST });
  return axios.post(
    "http://localhost:8080/users/login",
    userdata
  );
};

export const UserSignUp = (userdata) => (dispatch) => {
  dispatch({ type: LOGINSIGNUP_REQUEST });
  return axios.post(
    "http://localhost:8080/users/register",
    userdata
  );
};

export const UserLogout = (token) => (dispatch) => {
  dispatch({ type: LOGINSIGNUP_REQUEST });
  let config = {
    headers: {
      Authorization: token,
    },
  };
  return axios.post(
    "http://localhost:8080/users/logout",
    {},
    config
  );
};
