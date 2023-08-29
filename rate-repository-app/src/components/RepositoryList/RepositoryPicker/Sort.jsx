import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Divider, Menu, PaperProvider } from 'react-native-paper'

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    paddingBottom: 2,
    flexDirection: 'row',
  },
})

const Sort = ({ setOrderBy, setOrderDirection }) => {
  const [visible, setVisible] = useState(false)
  const [prompt, setPrompt] = useState('Latest repositories')
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const handlePress = (option) => {
    switch (option) {
      case 'Latest repositories':
        setOrderBy('CREATED_AT')
        setOrderDirection('DESC')
        setPrompt('Latest repositories')
        closeMenu()
        break
      case 'Highest rated repositories':
        setOrderBy('RATING_AVERAGE')
        setOrderDirection('DESC')
        setPrompt('Highest rated repositories')
        closeMenu()
        break
      case 'Lowest rated repositories':
        setOrderBy('RATING_AVERAGE')
        setOrderDirection('ASC')
        setPrompt('Lowest rated repositories')
        closeMenu()
        break
      default:
        setOrderBy('CREATED_AT')
        setOrderDirection('DESC')
        setPrompt('Latest repositories')
        closeMenu()
        break
    }
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>{`Sorted by: ${prompt}`}</Button>}
        >
          <Menu.Item title="Choose a sorting option" disabled={true} />
          <Divider />
          <Menu.Item
            onPress={() => handlePress('Latest repositories')}
            title="Latest repositories"
          />
          <Menu.Item
            onPress={() => handlePress('Highest rated repositories')}
            title="Highest rated repositories"
          />
          <Menu.Item
            onPress={() => handlePress('Lowest rated repositories')}
            title="Lowest rated repositories"
          />
        </Menu>
      </View>
    </PaperProvider>
  )
}

export default Sort
