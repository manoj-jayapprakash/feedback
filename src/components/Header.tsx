type HeaderProps = {
  text: string;
  bgColor: string;
  textColor: string;
};

export const Header = ({ text, bgColor, textColor }: HeaderProps) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">{text}</div>
    </header>
  );
};
