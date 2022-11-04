import { ApolloError } from '@apollo/client';
import { ReactNode } from 'react';

type QueryLoaderProps = {
  error?: ApolloError;
  isLoading: boolean;
  children: ReactNode;
};

export const QueryLoader = ({
  isLoading,
  children,
  error,
}: QueryLoaderProps) => {
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    return (
      <div style={{ color: 'red', textDecoration: 'underline' }}>
        {error.name}:
        <br />
        {error.message}!
      </div>
    );
  }

  return (
    <>{children}</>
  );
};
