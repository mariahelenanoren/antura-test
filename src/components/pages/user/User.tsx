import React, { useMemo } from 'react';
import {
  Typography,
  Grid,
  Box,
  Button,
  CircularProgress,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import { User } from '~/helpers';
import { useUserData } from '~/hooks';
import { ErrorAlert } from '~/components';
import { DataField, TextField, Thumbnail } from './components';
import { ErrorContainer } from './styles';

interface IUserPage {
  user: User;
}

type UserData = {
  [title: string]: {
    [key: string]: {
      value: string | number;
      type: RenderType;
    };
  };
};

enum RenderType {
  TEXT,
  NUMBER,
  IMAGE,
}

export const UserPage = ({ user }: IUserPage) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { user: fetchedUser, getUser, loading, error } = useUserData();

  const currentUser = useMemo(() => {
    return fetchedUser || user;
  }, [user, fetchedUser]);

  const { name, dob, email, gender, picture, location } = currentUser;

  const userData: UserData = {
    ['']: {
      firstname: {
        value: name.first,
        type: RenderType.TEXT,
      },
      lastname: {
        value: name.last,
        type: RenderType.TEXT,
      },
      title: {
        value: name.title,
        type: RenderType.TEXT,
      },
      email: {
        value: email,
        type: RenderType.TEXT,
      },
      age: {
        value: dob.age,
        type: RenderType.NUMBER,
      },
      gender: {
        value: gender,
        type: RenderType.TEXT,
      },
      picture: {
        value: picture.large,
        type: RenderType.IMAGE,
      },
    },
    location: {
      street: {
        value: `${location.street.name} ${location.street.number}`,
        type: RenderType.TEXT,
      },
      city: {
        value: location.city,
        type: RenderType.TEXT,
      },
      postcode: {
        value: location.postcode,
        type: RenderType.NUMBER,
      },
      state: {
        value: location.state,
        type: RenderType.TEXT,
      },
    },
  };

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
            <Link href="https://randomuser.me" sx={{ wordBreak: 'break-all' }}>
              https://randomuser.me/
            </Link>
          </Typography>
        </Box>

        <Box alignSelf={smallScreen ? 'flex-end' : 'flex-start'}>
          {loading && <CircularProgress size={12} sx={{ marginRight: 2 }} />}
          <Button onClick={getUser} variant="outlined">
            Get new user
          </Button>
        </Box>
      </Box>

      {error ? (
        <ErrorContainer>
          <ErrorAlert description="We were unable to get the user" />
        </ErrorContainer>
      ) : (
        <Box display="flex" flexDirection="column" rowGap={10}>
          {Object.entries(userData).map(([title, data], index) => (
            <Grid container spacing={4} key={index}>
              {title && (
                <Grid item>
                  <Typography
                    textTransform="capitalize"
                    fontSize={18}
                    fontWeight={500}
                  >
                    {title}
                  </Typography>
                </Grid>
              )}
              <Grid container item spacing={4}>
                {Object.entries(data).map(([label, { value, type }], index) => (
                  <DataField label={label} key={index}>
                    {type === RenderType.IMAGE ? (
                      <Thumbnail src={value as string} />
                    ) : (
                      <TextField value={value} />
                    )}
                  </DataField>
                ))}
              </Grid>
            </Grid>
          ))}
        </Box>
      )}
    </Box>
  );
};
