import { Image, StyleSheet, Text, View } from 'react-native'
import theme from '../../theme'

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  languageText: {
    backgroundColor: theme.colors.primary,
    padding: 8,
    color: 'white',
  },
})

const CardHeader = ({ item }) => {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.avatarContainer}>
        <Image
          style={headerStyles.avatar}
          source={{ uri: item.ownerAvatarUrl }}
        />
      </View>
      <View style={headerStyles.infoContainer}>
        <Text fontSize={'subheading'} fontWeight={'bold'}>
          {item.fullName}
        </Text>
        <Text>{item.description}</Text>
        <View style={headerStyles.languageContainer}>
          <Text style={headerStyles.languageText}>{item.language}</Text>
        </View>
      </View>
    </View>
  )
}

export default CardHeader
