import { StyleSheet, View, Dimensions } from 'react-native'
import { Searchbar } from 'react-native-paper'
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 6,
  },
  searchBar: {
    width: Dimensions.get('window').width < 600 ? 350 : 500,
  },
})

const Search = ({ searchKeyword, setSearchkeyword }) => {
  const onChangeSearch = (query) => setSearchkeyword(query)

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search by keyword"
        onChangeText={onChangeSearch}
        value={searchKeyword}
        elevation={1}
        style={styles.searchBar}
      />
    </View>
  )
}

export default Search
