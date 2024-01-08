import { fetchUser, User } from '../helpers';
import { PageLayout, UserPage } from '~/components';

interface IHome {
  user: User | null;
}

export const getStaticProps = async (): Promise<{ props: IHome }> => {
  // Fetch user data in getStaticProps to render page at build time
  try {
    const user = await fetchUser();
    return {
      props: {
        user,
      },
    };
  } catch {
    return {
      props: {
        user: null,
      },
    };
  }
};

export default function User({ user }: IHome) {
  return (
    <PageLayout>
      <UserPage user={user} />
    </PageLayout>
  );
}
