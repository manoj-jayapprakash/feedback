import { ReactNode } from 'react';

type CardProps = {
  children: React.ReactNode;
  reverse?: boolean;
};

export const Card = ({ children, reverse }: CardProps) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
};
