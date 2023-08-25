import { Animated } from 'react-native'

export const animated = new Animated.Value(1)

export const fadeIn = () => {
  Animated.timing(animated, {
    toValue: 0.1,
    duration: 100,
    useNativeDriver: true,
  }).start()
}

export const fadeOut = () => {
  Animated.timing(animated, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  }).start()
}
