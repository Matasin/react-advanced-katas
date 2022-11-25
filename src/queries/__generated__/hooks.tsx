import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const BasicUserDataFragmentDoc = gql`
    fragment BasicUserData on User {
  id
  firstName
  lastName
  email
  role
}
    `;
export const SensitiveUserDataFragmentDoc = gql`
    fragment SensitiveUserData on User {
  password
}
    `;
export const NonImportantUserDataFragmentDoc = gql`
    fragment NonImportantUserData on User {
  companyId
}
    `;
export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    ...BasicUserData
  }
}
    ${BasicUserDataFragmentDoc}`;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<Types.AllUsersQuery, Types.AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.AllUsersQuery, Types.AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.AllUsersQuery, Types.AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.AllUsersQuery, Types.AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<Types.AllUsersQuery, Types.AllUsersQueryVariables>;
export const UserDocument = gql`
    query User($id: ID!, $sensitiveData: Boolean!, $skipNonImportantData: Boolean!) {
  User(id: $id) {
    ...BasicUserData
    ...NonImportantUserData @skip(if: $skipNonImportantData)
    ...SensitiveUserData @include(if: $sensitiveData)
  }
}
    ${BasicUserDataFragmentDoc}
${NonImportantUserDataFragmentDoc}
${SensitiveUserDataFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *      sensitiveData: // value for 'sensitiveData'
 *      skipNonImportantData: // value for 'skipNonImportantData'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<Types.UserQuery, Types.UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.UserQuery, Types.UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.UserQuery, Types.UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.UserQuery, Types.UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<Types.UserQuery, Types.UserQueryVariables>;
export const AddUserDocument = gql`
    mutation AddUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $role: String!, $companyId: String!) {
  createUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
    role: $role
    companyId: $companyId
  ) {
    ...BasicUserData
  }
}
    ${BasicUserDataFragmentDoc}`;
export type AddUserMutationFn = Apollo.MutationFunction<Types.AddUserMutation, Types.AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      role: // value for 'role'
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.AddUserMutation, Types.AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.AddUserMutation, Types.AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<Types.AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<Types.AddUserMutation, Types.AddUserMutationVariables>;
export const RemoveUserDocument = gql`
    mutation RemoveUser($id: ID!) {
  removeUser(id: $id) {
    id
  }
}
    `;
export type RemoveUserMutationFn = Apollo.MutationFunction<Types.RemoveUserMutation, Types.RemoveUserMutationVariables>;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserMutation, { data, loading, error }] = useRemoveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.RemoveUserMutation, Types.RemoveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.RemoveUserMutation, Types.RemoveUserMutationVariables>(RemoveUserDocument, options);
      }
export type RemoveUserMutationHookResult = ReturnType<typeof useRemoveUserMutation>;
export type RemoveUserMutationResult = Apollo.MutationResult<Types.RemoveUserMutation>;
export type RemoveUserMutationOptions = Apollo.BaseMutationOptions<Types.RemoveUserMutation, Types.RemoveUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $role: String!) {
  updateUser(
    id: $id
    firstName: $firstName
    lastName: $lastName
    email: $email
    role: $role
  ) {
    ...BasicUserData
  }
}
    ${BasicUserDataFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<Types.UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>;