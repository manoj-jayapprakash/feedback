type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  isDisabled?: boolean;
};

export const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};
