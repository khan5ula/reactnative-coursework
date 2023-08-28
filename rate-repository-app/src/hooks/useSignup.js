import { useMutation } from '@apollo/client'
import { SIGNUP } from '../graphql/mutations'

const useSignup = () => {
  const [mutate, result] = useMutation(SIGNUP)

  const signUp = async (username, password) => {
    try {
      const { data } = await mutate({
        variables: {
          user: {
            username,
            password,
          },
        },
      })

      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return [signUp, result]
}

export default useSignup
