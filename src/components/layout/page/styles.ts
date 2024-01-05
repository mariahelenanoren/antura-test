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
