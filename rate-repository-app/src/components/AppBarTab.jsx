import { Pressable, View, StyleSheet } from 'react-native'
import Text from './Text'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  text: {
    padding: 6,
    marginEnd: 12,
  },
})

const AppBarTab = ({ text }) => {
  const [link, setLink] = useState('')
  const navigate = useNavigate()

  const handlePress = () => {
    navigate(link)
  }

  useEffect(() => {
    switch (text) {
      case 'Repositories':
        setLink(`/`)
        break
      case 'Sign in':
        setLink(`/signin`)
        break
      default:
        setLink(`/`)
        break
    }
  }, [text])

  return (
    <View>
      <Pressable onPress={handlePress}>
        <Text
          style={styles.text}
          color="appBarTitle"
          fontWeight="bold"
          fontSize="subheading"
        >
          {text}
        </Text>
      </Pressable>
    </View>
  )
}

export default AppBarTab
