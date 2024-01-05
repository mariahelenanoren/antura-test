'use client';

import { useState } from 'react';
import { fetchUser, User } from '~/helpers';

export const useUserData = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUser = async () => {
    setLoading(true);
    setError(false);

    try {
      const user = await fetchUser();
      setUser(user);
    } catch (error) {
      console.error('Could not fetch user data', { error });
      setError(true);
    }

    setLoading(false);
  };

  return {
    user,
    loading,
    error,
    getUser,
  };
};
