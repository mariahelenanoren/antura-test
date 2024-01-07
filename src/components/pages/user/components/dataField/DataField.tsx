import { PropsWithChildren } from 'react';
import { Typography, Grid } from '@mui/material';

interface IDataField extends PropsWithChildren {
  label: string;
}

export const DataField = ({ label, children }: IDataField) => {
  return (
    <Grid container item direction="column" xs={12} sm={6} md={4} spacing={1}>
      <Grid item>
        <Typography textTransform="capitalize" fontWeight={500}>
          {label}
        </Typography>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};
