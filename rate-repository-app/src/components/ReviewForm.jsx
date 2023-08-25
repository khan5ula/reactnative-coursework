import { Formik } from 'formik'
import { Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import useReview from '../hooks/useReview'
import theme from '../theme'
import FormikTextInput from './FormikTextInput'
import Text from './Text'

const initialValues = {
  repositoryOwnerName: '',
  repositoryName: '',
  rating: '',
  review: '',
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

export const Form = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="repositoryOwnerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 - 100" />
      <FormikTextInput
        name="review"
        placeholder="Your review"
        multiline
        height="20%"
        paddingTop={15}
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.text} fontWeight={'bold'}>
          Submit
        </Text>
      </Pressable>
    </View>
  )
}

const validationSchema = yup.object().shape({
  //username: yup.string().required('Username is required'),
  //password: yup.string().required('Password is required'),
})

const ReviewForm = () => {
  const [submitReview] = useReview()
  const navigate = useNavigate()

  const onSubmit = async (values, { resetForm }) => {
    const { repositoryOwnerName, repositoryName, rating, review } = values
    const ratingAsInt = parseInt(rating)
    resetForm()

    try {
      const reviewedRepositoryId = await submitReview({
        repositoryOwnerName,
        repositoryName,
        ratingAsInt,
        review,
      })
      navigate(`/repositories/${reviewedRepositoryId}`)
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
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default ReviewForm
