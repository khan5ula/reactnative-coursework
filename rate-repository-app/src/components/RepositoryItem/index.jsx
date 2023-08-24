import { Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import Text from '../Text'
import CardFooter from './Footer'
import CardHeader from './Header'

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 12,
    flexGrow: 1,
    backgroundColor: 'white',
  },
})

const RepositoryItem = ({ item, showUrl }) => {
  const navigate = useNavigate()

  return (
    <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
      <View style={styles.container} testID="repositoryItem">
        <CardHeader item={item} />
        <CardFooter item={item} />
        {showUrl && (
          <Pressable style={styles.button} onPress={() => console.log('press')}>
            <Text style={styles.text} fontWeight={'bold'}>
              Open in GitHub
            </Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  )
}

export default RepositoryItem
