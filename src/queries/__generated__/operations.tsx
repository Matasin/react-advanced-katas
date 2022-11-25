import * as Types from './types';

export type BasicUserDataFragment = { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, role: string };

export type SensitiveUserDataFragment = { __typename?: 'User', password: string };

export type NonImportantUserDataFragment = { __typename?: 'User', companyId: string };

export type AllUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsers?: Array<{ __typename?: 'User', id: string, firstName: string, lastName: string, email: string, role: string } | null> | null };

export type UserQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  sensitiveData: Types.Scalars['Boolean'];
  skipNonImportantData: Types.Scalars['Boolean'];
}>;


export type UserQuery = { __typename?: 'Query', User?: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, role: string, companyId: string, password: string } | null };

export type AddUserMutationVariables = Types.Exact<{
  firstName: Types.Scalars['String'];
  lastName: Types.Scalars['String'];
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
  role: Types.Scalars['String'];
  companyId: Types.Scalars['String'];
}>;


export type AddUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, role: string } | null };

export type RemoveUserMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser?: { __typename?: 'User', id: string } | null };

export type UpdateUserMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  firstName: Types.Scalars['String'];
  lastName: Types.Scalars['String'];
  email: Types.Scalars['String'];
  role: Types.Scalars['String'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, role: string } | null };
