import { useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import PostModal from '@/components/common/PostModal';
import { PostData, PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [allPosts, setAllPosts] = useState<PostProps[]>(posts);

  const handleAddPost = (newPost: PostData) => {
    const postWithId: PostProps = {
      ...newPost,
      id: allPosts.length + 1,
    };
    setAllPosts((prev) => [postWithId, ...prev]);
  };

  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Add Post
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <PostCard {...post} key={post.id} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostProps[] = await response.json();

  return {
    props: { posts },
  };
}

export default Posts;
