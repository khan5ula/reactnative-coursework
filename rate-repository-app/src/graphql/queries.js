import { gql } from '@apollo/client'
import {
  REPOSITORY_DETAILS,
  REPOSITORY_REVIEWS,
  USER_REVIEWS,
} from './fragments'

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS},
`

export const ME = gql`
  query Me($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...MyReviews
          }
        }
      }
    }
  }
  ${USER_REVIEWS}
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
