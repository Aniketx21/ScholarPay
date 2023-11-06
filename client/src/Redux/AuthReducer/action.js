import { LOGINSIGNUP_REQUEST } from "../actionTypes";
import axios from "axios";

export const UserLogin = (userdata) => (dispatch) => {
  dispatch({ type: LOGINSIGNUP_REQUEST });
  return axios.post(
    "https://scholarpay-server.onrender.com/users/login",
    userdata
  );
};

export const UserSignUp = (userdata) => (dispatch) => {
  dispatch({ type: LOGINSIGNUP_REQUEST });
  return axios.post(
    "https://scholarpay-server.onrender.com/users/register",
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
    "https://scholarpay-server.onrender.com/users/logout",
    {},
    config
  );
};
