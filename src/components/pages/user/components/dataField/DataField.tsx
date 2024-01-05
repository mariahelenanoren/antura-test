import { Typography, Grid, useTheme } from '@mui/material';
import { ValueContainer } from './styles';

interface IDataField {
  label: string;
  value: string | number;
}

export const DataField = ({ label, value }: IDataField) => {
  const theme = useTheme();
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography fontWeight={600}>{label}</Typography>
      </Grid>
      <Grid item>
        <ValueContainer>
          <Typography color={theme.palette.grey[700]}>{value}</Typography>
        </ValueContainer>
      </Grid>
    </Grid>
  );
};
