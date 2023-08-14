import { View, StyleSheet, Image } from 'react-native'
import Text from './Text'
import theme from '../theme'
import { useEffect, useState } from 'react'

const cardHeaderStyles = StyleSheet.create({
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
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image
          style={cardHeaderStyles.avatar}
          source={{ uri: item.ownerAvatarUrl }}
        />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text fontSize={'subheading'} fontWeight={'bold'}>
          {item.fullName}
        </Text>
        <Text>{item.description}</Text>
        <View style={cardHeaderStyles.languageContainer}>
          <Text style={cardHeaderStyles.languageText}>{item.language}</Text>
        </View>
      </View>
    </View>
  )
}

const footerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  components: {
    alignItems: 'center',
    marginTop: 5,
  },
})

const CardFooter = ({ item }) => {
  return (
    <View style={footerStyles.container}>
      <FooterComponent count={item.stargazersCount} title={'Stars'} />
      <FooterComponent count={item.forksCount} title={'Forks'} />
      <FooterComponent count={item.reviewCount} title={'Reviews'} />
      <FooterComponent count={item.ratingAverage} title={'Rating'} />
    </View>
  )
}

const FooterComponent = ({ count, title }) => {
  const [roundedCount, setRoundedCount] = useState(count)

  useEffect(() => {
    if (count > 1000) {
      const roundedValue = Number(count / 1000).toFixed(1)
      setRoundedCount(`${roundedValue}k`)
    } else {
      setRoundedCount(count)
    }
  }, [count])

  return (
    <View style={footerStyles.components}>
      <Text fontSize={'subheading'} fontWeight={'bold'}>
        {roundedCount}
      </Text>
      <Text fontSize={'subheading'}>{title}</Text>
    </View>
  )
}

const repositoryItemStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 12,
    flexGrow: 1,
    backgroundColor: 'white',
  },
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={repositoryItemStyles.container}>
      <CardHeader item={item} />
      <CardFooter item={item} />
    </View>
  )
}

export default RepositoryItem
