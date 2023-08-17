import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'
import { useEffect } from 'react'

const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  useEffect(() => {
    console.log(`data: ${JSON.stringify(data)}`)
    console.log(`error: ${JSON.stringify(error)}`)
  }, [])

  return {
    repositories: data?.repositories,
    loading,
    error,
    refetch,
  }
}

export default useRepositories
