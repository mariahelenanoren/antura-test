import { IRandomUserResponse } from './types';

export const fetchUser = async () => {
  const res = await fetch('https://randomuser.me/api/');

  // Determine status code
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  const data: IRandomUserResponse = await res.json();
  const user = data.results[0];
  return user;
};
