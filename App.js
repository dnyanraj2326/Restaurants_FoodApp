import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Components/stackNavigation/Navigation';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';

const App = () => {
  return (
    <View style={{ flex:1,height:'100%' }}>
      <Provider store={store}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      </Provider>
    </View>
    
  )
}

export default App

