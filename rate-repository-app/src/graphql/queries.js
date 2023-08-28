import { gql } from '@apollo/client'
import { REPOSITORY_DETAILS, REPOSITORY_REVIEWS } from './fragments'

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS},
`

export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      url
      ...RepositoryDetails
      ...Reviews
    }
  }
  ${REPOSITORY_DETAILS},
  ${REPOSITORY_REVIEWS}
`
