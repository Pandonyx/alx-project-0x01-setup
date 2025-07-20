import Button from '@/components/common/Button';

interface PostCardProps {
  title: string;
  excerpt: string;
  onReadMore?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  onReadMore,
}) => (
  <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
    <div className="flex flex-1 flex-col p-6">
      <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
        {title}
      </h2>
      <p className="mb-4 flex-1 text-gray-600">{excerpt}</p>

      {onReadMore && (
        <Button variant="ghost" onClick={onReadMore}>
          Read more →
        </Button>
      )}
    </div>
  </article>
);

export default PostCard;
