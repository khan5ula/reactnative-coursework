import { FlatList, StyleSheet, View } from 'react-native'
import { useParams } from 'react-router-native'
import RepositoryItem from '..'
import useRepository from '../../../hooks/useRepository'
import theme from '../../../theme'
import Review from './Review'

const styles = StyleSheet.create({
  listHeader: {
    marginBottom: theme.itemSeparator.height,
  },
})

export const ReviewContainer = ({ reviews, repository }) => {
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []
  const ItemSeparator = () => <View style={theme.itemSeparator} />

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Review review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} showUrl={true} />
      )}
      ListHeaderComponentStyle={styles.listHeader}
    />
  )
}

const SingleRepository = () => {
  const { id } = useParams()
  const { repository } = useRepository(id)

  return repository ? (
    <View>
      <ReviewContainer reviews={repository.reviews} repository={repository} />
    </View>
  ) : (
    <></>
  )
}

export default SingleRepository
