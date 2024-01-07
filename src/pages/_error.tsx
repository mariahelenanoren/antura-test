import { Box } from '@mui/material';

import { ErrorAlert, PageLayout } from '~/components';

export default function Error() {
  return (
    <PageLayout>
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ErrorAlert description="404 - This page could not be found" />
      </Box>
    </PageLayout>
  );
}
