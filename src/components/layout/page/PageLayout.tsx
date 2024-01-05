import { PropsWithChildren } from 'react';

import { Layout } from './styles';

export const PageLayout = ({ children }: PropsWithChildren) => {
  return <Layout>{children}</Layout>;
};
