import { http } from './client';

export const getParties = async () => {
  return await http.get('/parties');
};
