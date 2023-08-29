import { StyleSheet, View } from 'react-native'
import theme from '../../../../theme'
import Text from '../../../Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  ratingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    marginRight: 15,
    border: 'solid',
    borderWidth: 2,
    borderRadius: 50 / 2,
    borderColor: theme.colors.primary,
  },
  ratingText: {
    flexGrow: 0,
  },
  infoContainer: {
    flexGrow: 1,
  },
  dateContainer: {
    marginTop: 4,
  },
  textContainer: {
    marginTop: 8,
    width: '95%',
  },
})

const Content = ({ review, repoView }) => {
  const date = new Date(review.createdAt).toLocaleDateString('fi-FI', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text
          color="primary"
          fontWeight="bold"
          fontSize="subheading"
          style={styles.ratingText}
        >
          {review.rating}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        {repoView ? (
          <Text fontSize={'subheading'} fontWeight={'bold'}>
            {review.repository.fullName}
          </Text>
        ) : (
          <Text fontSize={'subheading'} fontWeight={'bold'}>
            {review.user.username}
          </Text>
        )}
        <View style={styles.dateContainer}>
          <Text>{date}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  )
}
export default Content
