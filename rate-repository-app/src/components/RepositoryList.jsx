import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem/RepositoryItem'
import { repositories } from '../resources/data'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}

export default RepositoryList
