import { GetStaticProps } from 'next';

import { fetchUser, User } from '../helpers';
import { PageLayout, UserPage } from '~/components';

interface IHome {
  user: User;
}

export const getStaticProps = async () => {
  try {
    const user = await fetchUser();
    return {
      props: {
        user,
      },
    };
  } catch {
    return { notFound: true };
  }
};

export default function User({ user }: IHome) {
  return (
    <PageLayout>
      <UserPage user={user} />
    </PageLayout>
  );
}
