import { Pressable, View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  text: {
    padding: 5,
  },
})

const AppBarTab = ({ text }) => {
  const handlePress = () => {
    console.log(`pressed ${text}`)
  }

  return (
    <View>
      <Pressable onPress={handlePress}>
        <Text
          style={styles.text}
          color="appBarTitle"
          fontWeight="bold"
          fontSize="subheading"
        >
          {text}
        </Text>
      </Pressable>
    </View>
  )
}

export default AppBarTab
