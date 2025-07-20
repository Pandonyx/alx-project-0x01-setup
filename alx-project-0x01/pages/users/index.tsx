import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersProps {
  posts: UserProps[]; // the API data arrives in `posts`
}

const Users: React.FC<UsersProps> = ({ posts }) => (
  <>
    <Head>
      <title>Users | ALX Project</title>
    </Head>

    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Users</h1>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((user) => (
            <li key={user.id}>
              <UserCard {...user} />
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  </>
);

// 📝 required by the task ­– leave variable names as‑is
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts: UserProps[] = await response.json();

  return {
    props: { posts },
  };
}

export default Users;
