import { ActivityIndicator, View } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from '../../../hooks/useRepository'
import theme from '../../../theme'
import ReviewContainer from './ReviewContainer'

const SingleRepository = () => {
  const { id } = useParams()
  const { repository, loading, fetchMore } = useRepository({ id: id, first: 4 })

  if (loading) {
    return (
      <View style={{ marginTop: 20 }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    )
  }

  return repository ? (
    <View>
      <ReviewContainer
        reviews={repository.reviews}
        repository={repository}
        fetchMore={fetchMore}
      />
    </View>
  ) : (
    <></>
  )
}

export default SingleRepository
