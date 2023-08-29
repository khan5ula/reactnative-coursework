import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
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

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  })

  return {
    repositories: data?.repositories,
    loading,
    error,
    refetch,
  }
}

export default useRepositories
