import { useEffect, useMemo } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';

import { User } from '~/helpers';
import { useUserData } from '~/hooks';
import { RootContainer } from './styles';

interface IUserPage {
  user: User;
}

export const UserPage = ({ user }: IUserPage) => {
  const { user: fetchedUser, getUser, loading, error } = useUserData();

  const currentUser = useMemo(() => {
    return fetchedUser || user;
  }, [user, fetchedUser]);

  useEffect(() => {
    console.log({ currentUser });
  }, [currentUser]);

  return (
    <RootContainer>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h6">User information</Typography>
          <Typography>
            User metadata fetched from{' '}
            <Link href="https://randomuser.me/">https://randomuser.me/</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={getUser} variant="outlined">
            Get new user
          </Button>
        </Grid>
      </Grid>
    </RootContainer>
  );
};
