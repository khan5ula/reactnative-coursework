import { useApolloClient, useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from '../hooks/useAuthStorage'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE)
  const authStorage = useAuthStorage()
  const client = useApolloClient()

  const signIn = async (username, password) => {
    const useMutate = await mutate({
      variables: {
        username,
        password,
      },
    })

    const { data } = useMutate
    const token = data.authenticate.accessToken
    await authStorage.setAccessToken(token)
    client.resetStore()

    return useMutate
  }

  return [signIn, result]
}

export default useSignIn
