import { ScrollView, StyleSheet, View } from 'react-native'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import useMe from '../../hooks/useMe'
import useSignOut from '../../hooks/useSignOut'

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
  const { me } = useMe({ includeReviews: false })
  const signOut = useSignOut()

  return (
    <View style={styles.flexContainer}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" url="/" />
        {!me && <AppBarTab text="Sign up" url="signup" />}
        {!me && <AppBarTab text="Sign in" url="signin" />}
        {me && <AppBarTab text="Create a review" url="/review" />}
        {me && <AppBarTab text="My reviews" url="/myreviews" />}
        {me && <AppBarTab text="Sign out" url="/" onPress={signOut} />}
      </ScrollView>
    </View>
  )
}

export default AppBar
