import { StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
  text: {
    padding: 6,
    marginEnd: 12,
  },
})

const AppBarTab = ({ text, url, onPress }) => {
  return (
    <View>
      <Link to={url} onPress={onPress}>
        <Text
          style={styles.text}
          color="appBarTitle"
          fontWeight="bold"
          fontSize="subheading"
        >
          {text}
        </Text>
      </Link>
    </View>
  )
}

export default AppBarTab
