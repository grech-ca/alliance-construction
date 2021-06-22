import { gql } from '@apollo/client';

const PROJECTS_QUERY = gql`
  query projects {
    projects {
      id
      type
    }
  }
`;

export default PROJECTS_QUERY;
