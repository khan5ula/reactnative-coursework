import { Image, StyleSheet, View } from 'react-native'
import theme from '../../theme'
import Text from '../Text'

const styles = StyleSheet.create({
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
  descriptionText: {
    width: '98%',
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
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      </View>
      <View style={styles.infoContainer}>
        <Text fontSize={'subheading'} fontWeight={'bold'}>
          {item.fullName}
        </Text>
        <View style={styles.descriptionText}>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>{item.language}</Text>
        </View>
      </View>
    </View>
  )
}

export default CardHeader
