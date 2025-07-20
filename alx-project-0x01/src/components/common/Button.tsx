interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: 'primary' | 'secondary' | 'ghost';

  full?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  full = false,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow',
    secondary:
      'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400',
    ghost:
      'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${
        full ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
