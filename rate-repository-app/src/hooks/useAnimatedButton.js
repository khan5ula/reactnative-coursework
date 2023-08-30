import { Animated } from 'react-native'

export const useAnimatedButton = () => {
  const animatedValue = new Animated.Value(1)

  const fadeIn = () => {
    Animated.timing(animatedValue, {
      toValue: 0.1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  return {
    animatedValue,
    fadeIn,
    fadeOut,
  }
}
