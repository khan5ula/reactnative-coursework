import { Pressable, StyleSheet, View, Animated } from 'react-native'
import { useNavigate } from 'react-router-native'
import theme from '../../theme'
import Text from '../Text'
import CardFooter from './Footer'
import CardHeader from './Header'
import * as Linking from 'expo-linking'

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 12,
    flexGrow: 1,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: theme.colors.primary,
    width: '90%',
    borderRadius: 5,
    marginTop: 10,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  githubLinkContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
})

const RepositoryItem = ({ item, showUrl }) => {
  const navigate = useNavigate()

  const handleRepositoryPress = () => {
    if (!showUrl) {
      navigate(`/repositories/${item.id}`)
    }
  }

  const handleGithubLinkPress = () => {
    if (showUrl && Linking.canOpenURL(item.url)) {
      Linking.openURL(item.url)
    }
  }

  const animated = new Animated.Value(1)

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Pressable onPress={() => handleRepositoryPress()}>
      <View style={styles.container} testID="repositoryItem">
        <CardHeader item={item} />
        <CardFooter item={item} />
        <View style={styles.githubLinkContainer}>
          {showUrl && (
            <Pressable
              onPressIn={fadeIn}
              onPressOut={fadeOut}
              style={styles.button}
              onPress={() => handleGithubLinkPress()}
            >
              <Animated.View style={{ opacity: animated }}>
                <Text style={styles.text} fontWeight={'bold'}>
                  Open in GitHub
                </Text>
              </Animated.View>
            </Pressable>
          )}
        </View>
      </View>
    </Pressable>
  )
}

export default RepositoryItem
