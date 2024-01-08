import { Grid, Typography } from '@mui/material';

import { User } from '~/helpers';
import { Label, Thumbnail, TextField } from './components';

interface IDataGrid {
  user: User;
}

type UserData = {
  [title: string]: {
    [label: string]: {
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

export const DataGrid = ({ user }: IDataGrid) => {
  const { name, dob, email, gender, picture, location } = user;

  // Structuring of user data to enable dynamic rendering
  // By simply adding fields to this object more data will be rendered on page
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
    <>
      {/* Dynamic rendering of user data */}
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
              <Label label={label} key={index}>
                {/* Data rendering is determined by type value */}
                {type === RenderType.IMAGE ? (
                  <Thumbnail src={value as string} />
                ) : (
                  <TextField value={value} />
                )}
              </Label>
            ))}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
