import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ orderBy, orderDirection, searchKeyword, first }) => {
  const variables = {}

  if (orderBy) {
    variables.orderBy = orderBy
  }

  if (orderDirection) {
    variables.orderDirection = orderDirection
  }

  if (searchKeyword) {
    variables.searchKeyword = searchKeyword
  }

  if (first) {
    variables.first = first
  }

  const { data, error, loading, refetch, fetchMore } = useQuery(
    GET_REPOSITORIES,
    {
      variables,
      fetchPolicy: 'cache-and-network',
    }
  )

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    error,
    refetch,
  }
}

export default useRepositories
