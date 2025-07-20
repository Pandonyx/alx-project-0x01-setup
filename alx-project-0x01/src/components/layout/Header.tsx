import Link from 'next/link';

const Header: React.FC = () => (
  <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        ALX&nbsp;Project
      </Link>

      <nav className="hidden gap-8 md:flex">
        <Link
          href="/posts"
          className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
        >
          Posts
        </Link>
        <Link
          href="/users"
          className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
        >
          Users
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
