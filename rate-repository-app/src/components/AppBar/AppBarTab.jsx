import { Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import Text from '../Text'

const styles = StyleSheet.create({
  text: {
    padding: 6,
    marginEnd: 12,
  },
})

const AppBarTab = ({ text, url, onPress }) => {
  const navigate = useNavigate()

  const handlePress = () => {
    if (onPress) {
      onPress()
    }
    navigate(url)
  }

  return (
    <View>
      <Pressable onPress={() => handlePress()}>
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
