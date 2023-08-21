import { useApolloClient } from '@apollo/client'
import useAuthStorage from '../hooks/useAuthStorage'

const useSignOut = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()

  const signOut = async () => {
    console.log('Signing out...')
    await authStorage.removeAccessToken()
    client.resetStore()
    console.log('Signed out')
  }

  return signOut
}

export default useSignOut
