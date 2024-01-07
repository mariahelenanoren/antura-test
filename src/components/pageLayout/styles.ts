import { Box, styled } from '@mui/material';

export const Layout = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  maxWidth: 1200,
  padding: '60px 40px',
  margin: 'auto',
}));

export const Paper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  padding: '60px 50px',
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[200]}`,
}));
