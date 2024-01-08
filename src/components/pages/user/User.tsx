import React, { useMemo } from 'react';
import {
  Typography,
  Box,
  Button,
  CircularProgress,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import { User } from '~/helpers';
import { useUserData } from '~/hooks';
import { DataGrid, ErrorAlert } from './components';
import { ErrorContainer } from './styles';

interface IUserPage {
  user: User | null;
}

export const UserPage = ({ user }: IUserPage) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { user: fetchedUser, getUser, loading, error } = useUserData();

  const currentUser = useMemo(() => {
    return fetchedUser || user;
  }, [user, fetchedUser]);

  return (
    <Box flex={1} display="flex" flexDirection="column" rowGap={10}>
      <Box
        display="flex"
        flexDirection={smallScreen ? 'column-reverse' : 'row'}
        alignItems="flex-start"
        justifyContent="space-between"
        rowGap={4}
      >
        <Box display="flex" flexDirection="column" rowGap={2}>
          <Typography variant="h6">User information</Typography>
          <Typography>
            User metadata fetched from{' '}
            <Link
              href="https://randomuser.me"
              target="_blank"
              rel="noopener"
              sx={{ wordBreak: 'break-all' }}
            >
              https://randomuser.me/
            </Link>
          </Typography>
        </Box>

        <Box alignSelf={smallScreen ? 'flex-end' : 'flex-start'}>
          {/* Non UI blocking loading indicator */}
          {loading && <CircularProgress size={12} sx={{ marginRight: 2 }} />}
          <Button onClick={getUser} variant="outlined">
            Get new user
          </Button>
        </Box>
      </Box>

      {error || !currentUser ? (
        <ErrorContainer>
          <ErrorAlert description="We were unable to get the user" />
        </ErrorContainer>
      ) : (
        <Box display="flex" flexDirection="column" rowGap={10}>
          <DataGrid user={currentUser} />
        </Box>
      )}
    </Box>
  );
};
