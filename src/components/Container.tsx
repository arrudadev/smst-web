import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>;
};
