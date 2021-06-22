import { gql } from '@apollo/client';

const CREATE_PROJECT_MUTATION = gql`
  mutation createProject($data: CreateProjectInput) {
    createProject(data: $data) {
      id
      type
      bedrooms
      floors
      price
      buildPrice
    }
  }
`;

export default CREATE_PROJECT_MUTATION;
