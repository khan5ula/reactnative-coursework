import { Formik } from 'formik'
import { Pressable, StyleSheet, View } from 'react-native'
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
  form: {
    height: 60,
    width: '90%',
    margin: 8,
    backgroundColor: 'white',
    textAlign: 'center',
    allowFontScaling: true,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.formBorder,
    fontSize: 20,
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
      <FormikTextInput
        style={styles.form}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        style={styles.form}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.text} fontWeight={'bold'}>
          Sign in
        </Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values)
    resetForm()
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
