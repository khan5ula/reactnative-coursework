import { gql } from '@apollo/client'

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    id
  }
`

export const REPOSITORY_REVIEWS = gql`
  fragment Reviews on Repository {
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
          repository {
            fullName
          }
        }
      }
    }
  }
`

export const USER_REVIEWS = gql`
  fragment MyReviews on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
    repository {
      fullName
      id
    }
  }
`
