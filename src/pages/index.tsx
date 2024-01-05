import { GetStaticProps } from 'next';

import { fetchUser, User } from '../helpers';

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

interface IHome {
  user: User;
}

export default function Home({ user }: IHome) {
  return <></>;
}
