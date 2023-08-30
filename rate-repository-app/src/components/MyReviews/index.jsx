import useMe from '../../hooks/useMe'
import { View, FlatList, ActivityIndicator } from 'react-native'
import theme from '../../theme'
import Review from '../RepositoryItem/SingleRepository/Review'
import Text from '../Text'

const MyReviews = () => {
  const { me, loading, error, refetch } = useMe({ includeReviews: true })
  const ItemSeparator = () => <View style={theme.itemSeparator} />

  if (loading) {
    return (
      <View style={{ marginTop: 20 }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    )
  }

  if (!error && me && me.reviews) {
    const reviews = me.reviews.edges.map((edge) => edge.node)

    return (
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Review review={item} repoView={false} refetch={refetch} />
        )}
        keyExtractor={(item) => item.id}
      />
    )
  }

  return <Text>Error loading reviews.</Text>
}

export default MyReviews
