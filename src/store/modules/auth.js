import swal from 'sweetalert';

import { signupRequest, loginRequest } from '../../api/auth';
import { setToken } from '../../utils/helpers';

//constants
export const SIGNUP_REQUESTED = 'SIGNUP_REQUESTED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const initialState = {
  isLoading: false,
  isAuthenticated: false,
  errors: [],
  successResponse: [],
};

export const signupRequested = () => {
  return {
    type: SIGNUP_REQUESTED,
  };
};

export const signupSuccess = payload => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};

export const signupError = error => {
  return {
    type: SIGNUP_ERROR,
    error,
  };
};

export const loginRequested = () => {
  return {
    type: LOGIN_REQUESTED,
  };
};

export const loginSuccess = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginError = error => {
  return {
    type: LOGIN_ERROR,
    error,
  };
};

export const loginUser = userData => {
  return async dispatch => {
    try {
      dispatch(loginRequested());
      const { data } = await loginRequest(userData);
      setToken(data.data.token);
      swal(`Welcome Back ${data.data.user.fullName}`);
      dispatch(loginSuccess(data));
    } catch (error) {
      const { data } = error.response;
      swal('error', data.error, 'error');
      dispatch(loginError(data));
    }
  };
};

export const signupUser = userData => {
  return async dispatch => {
    try {
      dispatch(signupRequested());
      const { data } = await signupRequest(userData);
      setToken(data.data[0].token);
      swal(`Welcome to Politico ${data.data[0].user.fullName}!!!`, 'success');
      dispatch(signupSuccess(data));
    } catch (error) {
      const { data } = error.response;
      swal('error', data.error, 'error');
      dispatch(signupError(data));
    }
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        successResponse: action.payload,
        isLoading: false,
        isAuthenticated: true,
        errors: [],
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errors: action.error,
      };
    case LOGIN_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        successResponse: action.payload,
        isLoading: false,
        isAuthenticated: true,
        errors: [],
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errors: action.error,
      };
    default:
      return state;
  }
};
