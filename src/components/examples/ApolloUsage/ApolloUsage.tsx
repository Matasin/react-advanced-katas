import { useState } from 'react';

import { QueryLoader } from '@/components/shared/QueryLoader';
import { useAllUsersQuery } from '@/queries/__generated__/hooks';
import type { User } from '@/queries/__generated__/types';

import { UsersTable } from './UsersTable';
import { UserPreview } from './UserPreview';

export const ApolloUsage = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const {
    data,
    loading,
    error,
  } = useAllUsersQuery();

  const handleSetUserId = (userId: string) => {
    setUserId(userId);
  };

  const renderUsers = () => {
    if (!data || !data.allUsers?.length) {
      return null;
    }

    return (
      <>
        <UsersTable
          users={data.allUsers as User[]}
          handleSetUserId={handleSetUserId}
        />
        {
          userId &&
          <>
            <UserPreview
              id={userId}
              sensitiveData={false}
              skipNonImportantData={true}
            />
            <UserPreview
              id={userId}
              sensitiveData={true}
              skipNonImportantData={false}
            />
          </>
        }
      </>
    );
  };

  return (
    <QueryLoader
      isLoading={loading}
      error={error}
    >
      {renderUsers()}
    </QueryLoader>
  );
};
