import { PropsWithChildren } from 'react';

import { Layout, Paper } from './styles';

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <Paper>{children}</Paper>
    </Layout>
  );
};
