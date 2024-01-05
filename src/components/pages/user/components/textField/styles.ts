import { styled, Box } from '@mui/material';

export const TextContainer = styled(Box)(({ theme }) => ({
  padding: '8px 16px',
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[200]}`,
}));
