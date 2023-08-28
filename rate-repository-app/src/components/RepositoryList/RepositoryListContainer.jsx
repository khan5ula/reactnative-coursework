import { View, FlatList } from 'react-native'
import theme from '../../theme'
import RepositoryItem from '../RepositoryItem'
import useRepositories from '../../hooks/useRepositories'
import RepositoryPicker from './RepositoryPicker'

const ItemSeparator = () => <View style={theme.itemSeparator} />

const RepositoryListContainer = ({
  orderBy,
  setOrderBy,
  orderDirection,
  setOrderDirection,
}) => {
  const { repositories } = useRepositories(orderBy, orderDirection)

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <RepositoryPicker
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
        />
      }
      ListHeaderComponentStyle={{ zIndex: 1 }}
    />
  )
}

export default RepositoryListContainer
