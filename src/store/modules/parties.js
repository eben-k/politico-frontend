import swal from 'sweetalert';

import { getParties, createParty } from '../../api/parties';

export const GET_PARTIES_SUCCESS = 'GET_PARTIES_SUCCESS';
export const GET_PARTIES_ERROR = 'GET_PARTIES_ERROR';
export const CREATE_PARTY_INITIALIZED = 'CREATE_PARTY_INITIALIZED';
export const CREATE_PARTY_SUCCESS = 'CREATE_PARTY_SUCCESS';
export const CREATE_PARTY_ERROR = 'CREATE_PARTY_ERROR';

export const getPartiesSuccess = parties => ({
  type: GET_PARTIES_SUCCESS,
  parties,
});

export const getPartiesError = error => ({
  type: GET_PARTIES_ERROR,
  error,
});

export const createPartyInitialized = () => {
  return {
    type: CREATE_PARTY_INITIALIZED,
  };
};

export const createPartySuccess = response => {
  return {
    type: CREATE_PARTY_SUCCESS,
    response,
  };
};

export const createPartyError = error => {
  return {
    type: CREATE_PARTY_ERROR,
    error,
  };
};

export const getAllParties = () => async dispatch => {
  try {
    const { data } = await getParties();
    dispatch(getPartiesSuccess(data.data.rows));
  } catch (error) {
    dispatch(getPartiesError(error.response));
  }
};

export const createPartyRequest = partyDetails => {
  return async dispatch => {
    try {
      dispatch(createPartyInitialized());
      const { data } = await createParty(partyDetails);
      dispatch(createPartySuccess(data.data[0]));
      swal('Party Registered Successfully', 'Success');
    } catch (error) {
      swal(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(createPartyError([data.error]));
    }
  };
};

export const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: {
    status: '',
  },
  parties: [],
  isGettingParties: true,
};

export const partyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTY_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PARTIES_SUCCESS:
      return {
        ...state,
        isGettingParties: false,
        parties: action.parties,
      };
    case GET_PARTIES_ERROR:
      return {
        ...state,
        isGettingParties: false,
        error: action.error,
      };
    case CREATE_PARTY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorResponse: [],
      };
    case CREATE_PARTY_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };
    default:
      return state;
  }
};
