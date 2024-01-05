import { Typography, Grid, useTheme } from '@mui/material';

import { TextContainer } from './styles';

interface ITextField {
  value: string | number;
}

export const TextField = ({ value }: ITextField) => {
  const theme = useTheme();

  return (
    <TextContainer>
      <Typography color={theme.palette.grey[700]}>{value}</Typography>
    </TextContainer>
  );
};
