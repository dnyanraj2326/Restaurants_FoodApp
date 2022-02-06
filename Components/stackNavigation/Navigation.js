import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import About from '../../Screens/About';
import Login from '../../Screens/Login';
import Splash from '../../Screens/Splash';
import UserProfile from '../../Screens/UserProfile';
import Signup from '../../Screens/Signup';
import Cart from '../../Screens/Cart';





const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="About" component={About} options={{headerShown:false}} />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}} />
      </Stack.Navigator>
  );
};

export default Navigation;
