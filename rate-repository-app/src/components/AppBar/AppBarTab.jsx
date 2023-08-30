import { Pressable, StyleSheet, View, Animated } from 'react-native'
import { useNavigate } from 'react-router-native'
import Text from '../Text'
import { useAnimatedButton } from '../../hooks/useAnimatedButton'

const styles = StyleSheet.create({
  text: {
    padding: 6,
    marginEnd: 12,
  },
})

const AppBarTab = ({ text, url, onPress }) => {
  const navigate = useNavigate()
  const buttonAnimation = useAnimatedButton()

  const handlePress = () => {
    if (onPress) {
      onPress()
    }
    navigate(url)
  }

  return (
    <View>
      <Pressable
        onPressIn={buttonAnimation.fadeIn}
        onPressOut={buttonAnimation.fadeOut}
        onPress={() => handlePress()}
      >
        <Animated.View style={{ opacity: buttonAnimation.animatedValue }}>
          <Text
            style={styles.text}
            color="appBarTitle"
            fontWeight="bold"
            fontSize="subheading"
          >
            {text}
          </Text>
        </Animated.View>
      </Pressable>
    </View>
  )
}

export default AppBarTab
