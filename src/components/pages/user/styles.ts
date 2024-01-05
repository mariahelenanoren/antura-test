import { styled, Box } from '@mui/material';

export const RootContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: '60px 50px',
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[200]}`,
}));
