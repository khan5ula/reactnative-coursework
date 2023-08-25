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
  console.log(JSON.stringify(review))
  return (
    <View style={styles.container}>
      <Content review={review} />
    </View>
  )
}

export default Review
