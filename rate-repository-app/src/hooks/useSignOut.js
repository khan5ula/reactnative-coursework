import { useApolloClient } from '@apollo/client'
import useAuthStorage from '../hooks/useAuthStorage'

const useSignOut = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()

  const signOut = async () => {
    await authStorage.removeAccessToken()
    client.resetStore()
  }

  return signOut
}

export default useSignOut
