import { ApolloProvider } from '@apollo/client'
import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'
import { StatusBar } from 'expo-status-bar'

const apolloClient = createApolloClient()

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
}

export default App
