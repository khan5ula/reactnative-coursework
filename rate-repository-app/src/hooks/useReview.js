import { useMutation } from '@apollo/client'
import { REVIEW } from '../graphql/mutations'

const useReview = () => {
  const [mutate, result] = useMutation(REVIEW)

  const submitReview = async (reviewInput) => {
    console.log('sending a review...')

    const { data } = await mutate({
      variables: {
        review: {
          ownerName: reviewInput.repositoryOwnerName,
          repositoryName: reviewInput.repositoryName,
          rating: reviewInput.ratingAsInt,
          text: reviewInput.review,
        },
      },
    })

    return data.createReview.repositoryId
  }

  return [submitReview, result]
}

export default useReview
