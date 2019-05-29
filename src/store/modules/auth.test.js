import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { http } from '../../api/client';
import {
  SIGNUP_SUCCESS,
  SIGNUP_REQUESTED,
  SIGNUP_ERROR,
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  signupRequested,
  signupSuccess,
  signupError,
  loginRequested,
  loginSuccess,
  loginError,
  authReducer,
  signupUser,
  loginUser,
} from './auth';

let store;

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  errors: [],
  successResponse: [],
};
const mockStore = configureStore([thunk]);

describe('SIGNUP ACTIONS', () => {
  const signupMockData = {
    data: [
      {
        token: '',
        user: {
          fullName: 'Joe Diggy',
          isAdmin: false,
        },
      },
    ],
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should dispatch an action for sign up request', () => {
    const action = {
      type: SIGNUP_REQUESTED,
    };
    expect(signupRequested()).toEqual(action);
  });
  it('should dispatch an action for sign up success', () => {
    const payload = {};
    const action = {
      type: SIGNUP_SUCCESS,
      payload,
    };
    expect(signupSuccess(payload)).toEqual(action);
  });
  it('should dispatch an action for sign up error', () => {
    const error = '';
    const action = {
      type: SIGNUP_ERROR,
      error,
    };
    expect(signupError(error)).toEqual(action);
  });
  it('should dispatch a successful signup action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.resolve({ data: signupMockData }));
    const expectedActions = [
      {
        type: 'SIGNUP_REQUESTED',
      },
      {
        type: 'SIGNUP_SUCCESS',
        payload: signupMockData,
      },
    ];
    return store.dispatch(signupUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch a failed signup action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [
      { type: 'SIGNUP_REQUESTED' },
      { type: 'SIGNUP_ERROR' },
    ];
    store.dispatch(signupUser()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});
describe('LOGIN ACTIONS', () => {
  const loginMockData = {
    data: {
      token: 'hjhjhhgd094707h',
      user: {
        fullName: 'Jane Doe',
        isAdmin: false,
      },
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should dispatch an action for login request', () => {
    const action = {
      type: LOGIN_REQUESTED,
    };
    expect(loginRequested()).toEqual(action);
  });
  it('should dispatch an action for sign up success', () => {
    const payload = {};
    const action = {
      type: LOGIN_SUCCESS,
      payload,
    };
    expect(loginSuccess(payload)).toEqual(action);
  });
  it('should dispatch an action for sign up error', () => {
    const error = '';
    const action = {
      type: LOGIN_ERROR,
      error,
    };
    expect(loginError(error)).toEqual(action);
  });
  it('should dispatch a successful login action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.resolve({ data: loginMockData }));
    const expectedActions = [
      {
        type: 'LOGIN_REQUESTED',
      },
      {
        type: 'LOGIN_SUCCESS',
        payload: loginMockData,
      },
    ];
    return store.dispatch(loginUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch a failed login action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [{ type: 'LOGIN_REQUESTED' }, { type: 'LOGIN_ERROR' }];
    store.dispatch(loginUser()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});

describe('auth reducer test suite', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should return default state', () => {
    const state = authReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should update store for signUpIntialize', () => {
    const action = signupRequested();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should update store for signup success', () => {
    const action = signupSuccess();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.successResponse).toEqual(action.response);
  });

  it('should update store for signup failure', () => {
    const action = signupError({ error: 'error occured' });
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errors).toEqual(action.error);
  });

  it('should update store for loginIntialize', () => {
    const action = loginRequested();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should update store for login success', () => {
    const action = loginSuccess();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.successResponse).toEqual(action.response);
  });

  it('should update store for login failure', () => {
    const action = loginError({ error: 'error occured' });
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errors).toEqual(action.error);
  });
});
