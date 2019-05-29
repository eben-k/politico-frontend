import { http } from './client';

export const signupRequest = async userCredentials => {
  return await http.post('/auth/signup', userCredentials);
};

export const loginRequest = async userCredentials => {
  return await http.post('/auth/login', userCredentials);
};
