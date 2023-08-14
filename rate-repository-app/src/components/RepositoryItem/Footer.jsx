import { StyleSheet, View } from 'react-native'
import FooterComponent from './FooterComponent'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
})

const CardFooter = ({ item }) => {
  return (
    <View style={styles.container}>
      <FooterComponent count={item.stargazersCount} title={'Stars'} />
      <FooterComponent count={item.forksCount} title={'Forks'} />
      <FooterComponent count={item.reviewCount} title={'Reviews'} />
      <FooterComponent count={item.ratingAverage} title={'Rating'} />
    </View>
  )
}

export default CardFooter
