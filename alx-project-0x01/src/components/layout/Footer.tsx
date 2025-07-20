const Footer: React.FC = () => (
  <footer className="mt-auto border-t border-gray-200 bg-gray-50">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 text-center sm:flex-row sm:justify-between sm:text-start">
      <span className="text-sm text-gray-500">
        © {new Date().getFullYear()} ALX Project
      </span>

      <div className="flex gap-4 text-gray-400">
       
      </div>
    </div>
  </footer>
);

export default Footer;
