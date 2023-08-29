import { useQuery } from '@apollo/client'
import { ME } from '../graphql/queries'

const useMe = ({ includeReviews }) => {
  const { data, error, loading, refetch } = useQuery(ME, {
    variables: {
      includeReviews,
    },
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
