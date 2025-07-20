import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
      {title}
    </h2>
    <p className="mb-auto line-clamp-4 text-sm text-gray-600">{body}</p>

    <footer className="mt-4 text-xs text-gray-400">
      Post #{id} • User #{userId}
    </footer>
  </article>
);

export default PostCard;
