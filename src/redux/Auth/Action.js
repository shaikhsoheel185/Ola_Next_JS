import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT
} from './ActionTypes';

import { API_BASE_URL } from '@/app/config/api';


// Register action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload:user });
const registerFailure = error => ({ type: REGISTER_FAILURE, payload: error });

export const registerUser = userData => async dispatch => {
  dispatch(registerRequest());
  try {
    const response=await axios.post(`${API_BASE_URL}/auth/user/signup`, userData);
    const user = response.data;
    if(user.jwt) localStorage.setItem("jwt",user.jwt)
    console.log("registerr :",user)
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

// // driver registration
// export const registerDriver = userData => async dispatch => {
//   dispatch(registerRequest());
//   try {
//     const response=await axios.post(`${API_BASE_URL}/auth/driver/signup`, userData);
//     const user = response.data;
//     if(user.jwt) localStorage.setItem("jwt",user.jwt)
//     console.log("register driver :",user)
//     dispatch(registerSuccess(user));
//   } catch (error) {
//     dispatch(registerFailure(error.message));
//   }
// };

// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

export const login = userData => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if(user.jwt) localStorage.setItem("jwt",user.jwt)
    console.log("login ",user)
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};



//  get user from token
export const getUser = (token) => {
  
  return async (dispatch) => {
    console.log("get user ",token)
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/profile`,{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      });
      const user = response.data;
      dispatch({ type: GET_USER_SUCCESS, payload: user });
      console.log("req User ",user)
    } catch (error) {
      const errorMessage = error.message;
      dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
    }
  };
};

//  get Driver from token
// export const getDriver = (token) => {
//   console.log("get driver ",token)
//   return async (dispatch) => {
//     dispatch({ type: GET_USER_REQUEST });
//     try {
//       const response = await axios.get(`${API_BASE_URL}/driver/profile`,{
//         headers:{
//           "Authorization":`Bearer ${token}`
//         }
//       });
//       const user = response.data;
//       dispatch({ type: GET_USER_SUCCESS, payload: user });
//       console.log("req User ",user)
//     } catch (error) {
//       const errorMessage = error.message;
//       dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
//     }
//   };
// };

export const logout = (token) => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT });
      localStorage.clear();
    };
  };
