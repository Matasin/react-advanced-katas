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