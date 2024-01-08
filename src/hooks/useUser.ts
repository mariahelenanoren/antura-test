'use client';

import { useState } from 'react';

import { fetchUser, User } from '~/helpers';

// Custom user data hook to separate business logic from UI components
export const useUserData = () => {
  const [user, setUser] = useState<User | null>(null);
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
