import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Components/stackNavigation/Navigation';

const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  )
}

export default App

