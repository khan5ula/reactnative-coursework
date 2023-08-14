import { StyleSheet, View } from 'react-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.container}>
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
  },
})
