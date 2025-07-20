import { UserProps } from '@/interfaces';
import Button from '@/components/common/Button';

/** Displays a single user profile */
const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user.name,
  )}&size=96&background=0D8ABC&color=fff`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Avatar */}
      <div className="flex items-center gap-4 p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt={user.name}
          className="h-16 w-16 shrink-0 rounded-full ring-2 ring-white transition group-hover:scale-105"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
            {user.name}
          </h3>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100" />

      {/* Company + website */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <p className="text-sm text-gray-600 line-clamp-2">
          {user.company.catchPhrase}
        </p>

        <Button
          className="mt-6"
          variant="ghost"
          full
          onClick={() => window.open(`mailto:${user.email}`, '_blank')}
        >
          Email • {user.email}
        </Button>
      </div>
    </article>
  );
};

export default UserCard;
