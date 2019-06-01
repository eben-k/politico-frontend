import { http } from './client';

export const getParties = async () => {
  return await http.get('/parties');
};

export const createParty = async partyDetails => {
  return await http.post('parties/', partyDetails);
};
