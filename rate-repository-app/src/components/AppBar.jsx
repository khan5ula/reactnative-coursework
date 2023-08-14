import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 15,
    paddingStart: 5,
    backgroundColor: theme.colors.appBarColor,
  },
})

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <AppBarTab text="Repositories" />
      <AppBarTab text="Sign in" />
    </View>
  )
}

export default AppBar
