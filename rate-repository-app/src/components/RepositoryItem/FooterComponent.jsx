import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  components: {
    alignItems: 'center',
    marginTop: 5,
  },
})

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
    <View style={styles.components}>
      <Text fontSize={'subheading'} fontWeight={'bold'}>
        {roundedCount}
      </Text>
      <Text fontSize={'subheading'}>{title}</Text>
    </View>
  )
}

export default FooterComponent
