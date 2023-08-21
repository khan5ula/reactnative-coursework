import { useQuery } from '@apollo/client'
import { ME } from '../graphql/queries'

const useMe = () => {
  const { data, error, loading, refetch } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  })

  return {
    me: data?.me,
    loading,
    error,
    refetch,
  }
}

export default useMe
