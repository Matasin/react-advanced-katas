import { getUserKeys } from '@/components/examples/ApolloUsage/UsersTable/utils';
import { QueryLoader } from '@/components/shared/QueryLoader';
import { useUserQuery } from '@/queries/__generated__/hooks';

type UserPreviewProps = {
  id: string;
  sensitiveData: boolean;
  skipNonImportantData: boolean;
};

export const UserPreview = ({
  id,
  sensitiveData,
  skipNonImportantData,
}: UserPreviewProps) => {
  const {
    data,
    loading,
    error,
  } = useUserQuery({
    variables: {
      id,
      sensitiveData,
      skipNonImportantData,
    }
  });

  const user = data?.User;
  const userKeys = getUserKeys(user);


  const renderUser = () => {
    if (!data || !userKeys) {
      return null;
    }

    return (
      <ul>
        {userKeys.map((key, index) => {
          return (
            <li key={index}>
              {key}: {user[key]}
            </li>
          );
        })}
        <hr />
      </ul>
    );
  };
  return (
    <QueryLoader
      isLoading={loading}
      error={error}
    >
      {renderUser()}
    </QueryLoader>
  );
};
