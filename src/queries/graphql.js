import { gql } from "@apollo/client";

// export const GET_LAUNCHES = gql`
//   query GetLaunches {
//     launches(limit: 10) {
//       mission_name
//       launch_date_utc
//       rocket {
//         rocket_name
//       }
//       launch_success
//     }
//   }
// `;

export const GET_LAUNCHES = gql`
  query GetLaunches($offset: Int, $limit: Int) {
    launches(offset: $offset, limit: $limit) {
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      launch_success
    }
  }
`;

export const CREATE_ROCKET_MUTATION = gql`
  mutation CreateRocket($name: String!, $description: String) {
    createRocket(input: { name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;
