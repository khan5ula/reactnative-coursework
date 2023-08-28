import { Formik } from 'formik'
import { Pressable, ScrollView, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import theme from '../theme'
import FormikTextInput from './FormikTextInput'
import Text from './Text'

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

export const SignInForm = ({ onSubmit }) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
    >
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.text} fontWeight={'bold'}>
          Sign in
        </Text>
      </Pressable>
    </ScrollView>
  )
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values
    resetForm()

    try {
      await signIn(username, password)
      navigate('/')
    } catch (error) {
      console.log(`error: ${JSON.stringify(error)}`)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
