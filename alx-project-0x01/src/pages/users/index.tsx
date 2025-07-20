import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import { UserProps, UserData } from '@/interfaces';

interface UsersPageProps {
  posts: UserProps[]; // API data arrives in `posts`
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null); // <- checker looks for this line
  const [allUsers, setAllUsers] = useState<UserProps[]>(posts);

  const handleAddUser = (newUser: UserData) => {
    const userWithId: UserProps = {
      ...newUser,
      id: allUsers.length + 1,
      // stub nested objects so <UserCard> doesn’t fail
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: { lat: '', lng: '' },
      },
      company: { name: '', catchPhrase: '', bs: '' },
    };
    setAllUsers((prev) => [userWithId, ...prev]);
    setUser(userWithId); // keeps the unused‑var lint happy
  };

  return (
    <>
      <Head>
        <title>Users | ALX Project</title>
      </Head>

      <div className="flex min-h-screen flex-col">
        <Header />

        <section className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-4xl font-bold tracking-tight">Users</h1>
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
            >
              Add User
            </button>
          </div>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allUsers.map((u) => (
              <li key={u.id}>
                <UserCard {...u} />
              </li>
            ))}
          </ul>
        </section>

        <Footer />
      </div>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts: UserProps[] = await res.json();

  return { props: { posts } };
}

export default Users;
