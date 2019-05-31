import { getParties } from '../../api/parties';

export const GET_PARTIES_SUCCESS = 'GET_PARTIES_SUCCESS';
export const GET_PARTIES_ERROR = 'GET_PARTIES_ERROR';

export const getPartiesSuccess = parties => ({
  type: GET_PARTIES_SUCCESS,
  parties,
});

export const getPartiesError = error => ({
  type: GET_PARTIES_ERROR,
  error,
});

export const getAllParties = () => async dispatch => {
  try {
    const { data } = await getParties();
    dispatch(getPartiesSuccess(data.data.rows));
  } catch (error) {
    dispatch(getPartiesError(error.response));
  }
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
    default:
      return state;
  }
};
