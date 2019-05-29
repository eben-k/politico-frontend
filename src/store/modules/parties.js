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

export const initialState =

export const partyReducer = ()
