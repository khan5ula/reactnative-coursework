import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import useSignin from '../../hooks/useSignIn'
import useSignup from '../../hooks/useSignup'
import SignUpForm from './SignUpForm'

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(5).max(30),
  password: yup.string().required('Password is required').min(5).max(30),
  passwordConfirmation: yup
    .string('error')
    .min(5)
    .max(30)
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'The passwords do not match'),
})

const SignUp = () => {
  const [signUp] = useSignup()
  const [signIn] = useSignin()
  const navigate = useNavigate()

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values
    resetForm()

    try {
      await signUp(username, password)
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
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignUp
