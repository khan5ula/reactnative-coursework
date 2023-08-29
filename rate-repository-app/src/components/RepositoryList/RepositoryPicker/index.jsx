import { StyleSheet, View } from 'react-native'
import Search from './Search'
import Sort from './Sort'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 6,
  },
})

const RepositoryPicker = ({
  setOrderBy,
  setOrderDirection,
  setSearchkeyword,
  searchKeyword,
}) => {
  return (
    <View style={styles.container}>
      <Search
        searchKeyword={searchKeyword}
        setSearchkeyword={setSearchkeyword}
      />
      <Sort setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} />
    </View>
  )
}

export default RepositoryPicker
