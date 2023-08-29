import { StyleSheet, View } from 'react-native'
import Content from './Content'

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 12,
    flexGrow: 1,
    backgroundColor: 'white',
  },
})

const Review = ({ review }) => {
  return (
    <View style={styles.container}>
      <Content review={review} repoView={true} />
    </View>
  )
}

export default Review
