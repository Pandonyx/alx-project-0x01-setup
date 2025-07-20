import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';

const UsersPage: React.FC = () => {
  const users = [
    { id: 1, name: 'Ada Lovelace', role: 'Programmer' },
    { id: 2, name: 'Alan Turing', role: 'Mathematician' },
    { id: 3, name: 'Grace Hopper', role: 'Computer Scientist' },
  ];

  return (
    <>
      <Head>
        <title>Users | ALX Project</title>
      </Head>

      <div className="flex min-h-screen flex-col">
        

        <section className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold tracking-tight">Users</h1>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {users.map(({ id, name, role }) => (
              <li
                key={id}
                className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>

                <Button
                  className="mt-6"
                  variant="primary"
                  onClick={() => alert(`Viewing ${name}`)}
                  full
                >
                  View profile
                </Button>
              </li>
            ))}
          </ul>
        </section>

        
      </div>
    </>
  );
};

export default UsersPage;
