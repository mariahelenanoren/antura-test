import { Alert, AlertTitle } from '@mui/material';

interface IErrorAlert {
  description: string;
}

export const ErrorAlert = ({ description }: IErrorAlert) => {
  return (
    <Alert severity="error" variant="outlined" sx={{ maxWidth: 'fit-content' }}>
      <AlertTitle>An error occured</AlertTitle>
      {description}
    </Alert>
  );
};
