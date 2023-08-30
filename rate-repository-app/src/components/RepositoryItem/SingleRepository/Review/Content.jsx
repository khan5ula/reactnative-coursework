import { Animated, Pressable, StyleSheet, View, Alert } from 'react-native'
import { useAnimatedButton } from '../../../../hooks/useAnimatedButton'
import theme from '../../../../theme'
import Text from '../../../Text'
import { useNavigate } from 'react-router-native'
import useDeleteReview from '../../../../hooks/useDeleteReview'

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
  viewButton: {
    backgroundColor: theme.colors.primary,
    width: '40%',
    borderRadius: 5,
    marginTop: 10,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
    width: '40%',
    borderRadius: 5,
    marginTop: 10,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    color: 'white',
  },
})

const Content = ({ review, repoView, refetch }) => {
  const date = new Date(review.createdAt).toLocaleDateString('fi-FI', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

  const navigate = useNavigate()

  const viewButtonAnimation = useAnimatedButton()
  const deleteButtonAnimation = useAnimatedButton()

  const handleViewButtonPress = () => {
    navigate(`/repositories/${review.repository.id}`)
  }

  const deleteReviewAlert = () =>
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Delete', onPress: () => handleDelete() },
      ]
    )

  const [deleteReview] = useDeleteReview()

  const handleDelete = async () => {
    try {
      await deleteReview({ deleteReviewId: review.id })
      refetch()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View>
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
      {!repoView && (
        <View style={styles.buttonContainer}>
          <Pressable
            onPressIn={viewButtonAnimation.fadeIn}
            onPressOut={viewButtonAnimation.fadeOut}
            style={styles.viewButton}
            onPress={() => handleViewButtonPress()}
          >
            <Animated.View
              style={{ opacity: viewButtonAnimation.animatedValue }}
            >
              <Text style={styles.buttonText} fontWeight={'bold'}>
                View repository
              </Text>
            </Animated.View>
          </Pressable>
          <Pressable
            onPressIn={deleteButtonAnimation.fadeIn}
            onPressOut={deleteButtonAnimation.fadeOut}
            style={styles.deleteButton}
            onPress={() => deleteReviewAlert()}
          >
            <Animated.View
              style={{ opacity: deleteButtonAnimation.animatedValue }}
            >
              <Text style={styles.buttonText} fontWeight={'bold'}>
                Delete review
              </Text>
            </Animated.View>
          </Pressable>
        </View>
      )}
    </View>
  )
}
export default Content
