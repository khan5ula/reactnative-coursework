import { StyleSheet, View } from 'react-native'
import CardFooter from './Footer'
import CardHeader from './Header'

const repositoryItemStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 12,
    flexGrow: 1,
    backgroundColor: 'white',
  },
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={repositoryItemStyles.container}>
      <CardHeader item={item} />
      <CardFooter item={item} />
    </View>
  )
}

export default RepositoryItem
