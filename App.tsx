/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Provider } from 'react-redux'
import store from './src/configs/store'
import HomeScreen from './src/containers/HomeScreen'

const App: () => React.ReactNode = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}

export default App
