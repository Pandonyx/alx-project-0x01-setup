import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';

const PostsPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'First Post',
      excerpt:
        'Everything you need to know about setting up your first Next.js project.',
    },
    {
      id: 2,
      title: 'Second Post',
      excerpt:
        'A deep dive into Tailwind CSS best practices for large codebases.',
    },
    {
      id: 3,
      title: 'Third Post',
      excerpt: 'Why ESLint saves you hours of debugging time.',
    },
  ];

  return (
    <>
      <Head>
        <title>Posts | ALX Project</title>
      </Head>

      <div className="flex min-h-screen flex-col">
        

        <section className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold tracking-tight">Posts</h1>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ id, title, excerpt }) => (
              <PostCard
                key={id}
                title={title}
                excerpt={excerpt}
                onReadMore={() => alert(`Clicked post ${id}`)}
              />
            ))}
          </div>
        </section>

        
      </div>
    </>
  );
};

export default PostsPage;
