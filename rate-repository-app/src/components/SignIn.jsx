import { Formik } from 'formik'
import { Pressable, StyleSheet, View } from 'react-native'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import theme from '../theme'
import FormikTextInput from './FormikTextInput'
import Text from './Text'
import AuthStorage from '../utils/authStorage'

const initialValues = {
  username: '',
  password: '',
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    width: '90%',
    borderRadius: 5,
    marginTop: 10,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
})

const Form = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.text} fontWeight={'bold'}>
          Sign in
        </Text>
      </Pressable>
    </View>
  )
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const SignIn = () => {
  const [signIn] = useSignIn()
  const userStorage = new AuthStorage('userStorage')

  const setToken = async (data) => {
    const token = data.authenticate.accessToken
    await userStorage.setAccessToken(token)
  }

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values
    resetForm()

    try {
      const { data } = await signIn(username, password)
      await setToken(data)
      console.log(`token: ${String(await userStorage.getAccessToken())}`)
    } catch (e) {
      console.log(`sign in error: ${JSON.stringify(e)}`)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
