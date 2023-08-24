import { StyleSheet, View } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-native'
import theme from '../theme'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import RenderSingleRepository from './RepositoryItem/RenderSingleRepository'
import useRepository from '../hooks/useRepository'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackGround,
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/repositories">
          <Route path=":id" element={<RenderSingleRepository />} exact />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main
