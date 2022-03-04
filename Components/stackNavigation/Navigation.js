import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import About from '../../Screens/About';
import Login from '../../Screens/Login';
import Splash from '../../Screens/Splash';
import UserProfile from '../../Screens/UserProfile';
import Signup from '../../Screens/Signup';
import Cart from '../../Screens/Cart';
import PaymentSuccesful from '../../Screens/PaymentSuccesful';
import ForgotPassword from '../../Screens/ForgotPassword';
import ForgotPassOtp from '../../Screens/ForgotPassOtp';
import ForgotNewPass from '../../Screens/ForgotNewPass';
import LocationScreen from '../../Database/LocationScreen'




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
        <Stack.Screen name="PaymentSuccesful" component={PaymentSuccesful} options={{headerShown:false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}} />
        <Stack.Screen name="ForgotPassOtp" component={ForgotPassOtp} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotNewPass" component={ForgotNewPass} options={{headerShown:false}} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} options={{headerShown:false}} />
      </Stack.Navigator>
  );
};

export default Navigation;
