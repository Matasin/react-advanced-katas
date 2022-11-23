import type { User } from '@/queries/__generated__/types';

import { getUserKeys } from './utils';

type UsersTableProps = {
  users: (User | null)[];
  handleSetUserId: (user: string) => void;
};

export const UsersTable = ({
  users,
  handleSetUserId,
}: UsersTableProps) => {
  const keys = getUserKeys(users[0]);

  if (!keys) {
    return null;
  }

  const renderHeaderCells = () => {
    return (
      keys.map((cellName, index) => (
        <td key={index}>{cellName}</td>
      ))
    );
  };

  const renderBody = () => {
    return (
      <tbody>
        {users.map((user, index) => {
          if (!user) {
            return null;
          }

          return (
            <tr
              key={index}
              onClick={() => handleSetUserId(user.id)}
            >
              {keys.map((key) => {
                return (
                  <td key={key}>
                    {user[key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };


  return (
    <table>
      <thead>
        <tr>
          {renderHeaderCells()}
        </tr>
      </thead>
      {renderBody()}
    </table>
  );
};
