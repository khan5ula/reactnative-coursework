import { FlatList, StyleSheet, View } from 'react-native'
import RepositoryItem from '..'
import theme from '../../../theme'
import Review from './Review'

const styles = StyleSheet.create({
  listHeader: {
    marginBottom: theme.itemSeparator.height,
  },
})

const ReviewContainer = ({ reviews, repository, fetchMore }) => {
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []
  const ItemSeparator = () => <View style={theme.itemSeparator} />

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 100 }}
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Review review={item} repoView={true} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} showUrl={true} />
      )}
      ListHeaderComponentStyle={styles.listHeader}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default ReviewContainer
