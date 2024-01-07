import React, { useMemo } from 'react';
import {
  Typography,
  Grid,
  Button,
  CircularProgress,
  Link,
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
    <Grid container direction="column" spacing={10} flex={1}>
      <Grid container item justifyContent="space-between">
        <Grid container item direction="column" xs="auto" spacing={2}>
          <Grid item>
            <Typography variant="h6">User information</Typography>
          </Grid>
          <Grid item>
            <Typography>
              User metadata fetched from{' '}
              <Link href="https://randomuser.me">https://randomuser.me/</Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          {loading && <CircularProgress size={12} sx={{ marginRight: 2 }} />}
          <Button onClick={getUser} variant="outlined">
            Get new user
          </Button>
        </Grid>
      </Grid>

      {error ? (
        <ErrorContainer item xs>
          <ErrorAlert description="We were unable to get the user" />
        </ErrorContainer>
      ) : (
        <Grid container item spacing={10}>
          {Object.entries(userData).map(([title, data], index) => (
            <Grid container item spacing={4} key={index}>
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
        </Grid>
      )}
    </Grid>
  );
};
