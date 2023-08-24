import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORY, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
  })

  return {
    repository: data?.repository,
    loading,
    error,
    refetch,
  }
}

export default useRepository
