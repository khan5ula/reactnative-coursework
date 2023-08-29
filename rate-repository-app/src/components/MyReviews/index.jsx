import useMe from '../../hooks/useMe'
import { View, FlatList } from 'react-native'
import theme from '../../theme'
import Review from '../RepositoryItem/SingleRepository/Review'

const MyReviews = () => {
  const me = useMe({ includeReviews: true })
  const ItemSeparator = () => <View style={theme.itemSeparator} />
  const reviews = me.me.reviews.edges.map((edge) => edge.node)

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Review review={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}

export default MyReviews
