import { StyleSheet, View } from 'react-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import theme from '../theme'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        <RepositoryList />
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackGround,
  },
})
