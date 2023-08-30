import * as Linking from 'expo-linking'
import { Animated, Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import theme from '../../theme'
import { useAnimatedButton } from '../../hooks/useAnimatedButton'
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

  const githubLinkAnimation = useAnimatedButton()

  return (
    <Pressable onPress={() => handleRepositoryPress()}>
      <View style={styles.container} testID="repositoryItem">
        <CardHeader item={item} />
        <CardFooter item={item} />
        <View style={styles.githubLinkContainer}>
          {showUrl && (
            <Pressable
              onPressIn={githubLinkAnimation.fadeIn}
              onPressOut={githubLinkAnimation.fadeOut}
              style={styles.button}
              onPress={() => handleGithubLinkPress()}
            >
              <Animated.View
                style={{ opacity: githubLinkAnimation.animatedValue }}
              >
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
