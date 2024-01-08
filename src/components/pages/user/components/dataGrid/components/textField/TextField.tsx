import { TextField as MuiTextField } from '@mui/material';

interface ITextField {
  value: string | number;
}

export const TextField = ({ value }: ITextField) => {
  return (
    <MuiTextField
      disabled
      size="medium"
      variant="outlined"
      fullWidth
      value={value}
    />
  );
};
