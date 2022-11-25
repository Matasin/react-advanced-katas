import { ChangeEvent, useState } from 'react';

import { useAddUserMutation, useRemoveUserMutation, useUpdateUserMutation } from '@/queries/__generated__/hooks';
import type { User } from '@/queries/__generated__/types';

import { getUserKeys } from './utils';

type UsersTableProps = {
  users: User[];
  handleSetUserId: (user: string) => void;
};

export const UsersTable = ({
  users,
  handleSetUserId,
}: UsersTableProps) => {
  const keys = getUserKeys(users[0]);
  const [userData, setUserData] = useState<null | User>(null);
  const [createUser, {
    error: createUserError,
  }] = useAddUserMutation();
  const [removeUser] = useRemoveUserMutation();
  const [updateUser] = useUpdateUserMutation();

  if (createUserError) {
    return (
      <div className='error-message'>
        `Submission error! ${createUserError.message}`
      </div>
    );
  };

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

  const handleAddUser = () => {
    createUser({
      variables: {
        companyId: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        role: '',
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            allUsers: (previous, { toReference }) => {
              return [...previous, toReference(data?.createUser!)];
            }
          }
        });
      },
    });
  };

  const handleRemoveUser = (id: string) => {
    removeUser({
      variables: {
        id
      },
      update(cache) {
        cache.modify({
          fields: {
            allUsers: () => users.filter((user) => user.id !== id)
          }
        });
      }
    });
  };

  const handleSetUser = (user: User | null) => {
    setUserData(user);
  };

  const handleUpdateUser = () => {
    if (!userData) {
      return;
    }
    updateUser({
      variables: userData
    });

    setUserData(null);
  };


  const handleChangeUserData = (e: ChangeEvent<HTMLInputElement>) => {
    type ObjectKey = keyof typeof userData;

    const value = e.target.value as ObjectKey;
    const name = e.target.name as ObjectKey;


    const updatedUser = { ...userData };

    updatedUser[name] = value;

    setUserData(updatedUser as User);
  };

  const renderBody = () => {
    return (
      <tbody>
        {users.map((user, index) => {
          if (!user) {
            return null;
          }

          const isEditing = userData?.id === user.id;

          return (
            <tr
              key={index}
              onClick={() => handleSetUserId(user.id)}
            >
              {keys.map((key) => {
                return (
                  isEditing ? (
                    <td key={key}>
                      <input
                        value={userData[key]}
                        name={key}
                        onChange={handleChangeUserData}
                      />
                    </td>
                  ) : (
                    <td key={key}>
                      {user[key]}
                    </td>
                  )
                );
              })}
              <td>
                {isEditing ? (
                  <>
                    <button onClick={handleUpdateUser}>Save</button>
                    <button onClick={() => handleSetUser(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleSetUser(user)}>Edit</button>
                    <button onClick={() => handleRemoveUser(user.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };


  return (
    <>
      <table>
        <thead>
          <tr>
            {renderHeaderCells()}
            <td>
              Actions
            </td>
          </tr>
        </thead>
        {renderBody()}
      </table>
      <button
        className='add-user-button'
        onClick={handleAddUser}>
        Add user
      </button>
    </>
  );
};
