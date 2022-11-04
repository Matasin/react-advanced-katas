import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const GET_ERROR = gql`
  query GetLocations {
    test {
      id
    }
  }
`;
