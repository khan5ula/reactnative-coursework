import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import useReview from '../../hooks/useReview'
import ReviewForm from './ReviewForm'

const initialValues = {
  repositoryOwnerName: '',
  repositoryName: '',
  rating: '',
  review: '',
}

const validationSchema = yup.object().shape({
  repositoryOwnerName: yup
    .string()
    .required('Name of the repository owner is required'),
  repositoryName: yup.string().required('Name of the repository is required'),
  rating: yup
    .number()
    .required('Rating of the repository is required')
    .min(0, 'The minimum viable rating is 0')
    .max(100, 'The maximum viable rating is 100'),
  review: yup.string().required('Review of the repository is required'),
})

const CreateReview = () => {
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
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default CreateReview
