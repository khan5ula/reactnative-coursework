import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <AppBarTab text="Repositories" />
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 15,
    marginBottom: 5,
    paddingStart: 5,
    backgroundColor: theme.colors.appBarColor,
  },
})
