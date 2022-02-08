import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';


const ForgotNewPass = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1, paddingHorizontal: 30}}>
      <View>
      <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop:40
          }}>
          <LottieView
            source={require('../assets/icon/78027-enter-password.json')}
            autoPlay
            style={{height: 200, width: '100%'}}
          />
        </View>
        <View style={{paddingTop: 100}}>
          <Text style={{fontSize: 16, fontWeight: 'bold',color:'#000'}}>
            Please enter a new password
          </Text>
        </View>
        <View>
          <View style={{position: 'relative', justifyContent: 'center',marginTop:20}}>
            <View style={{position: 'absolute',flexDirection:'row',justifyContent:'space-between',width:'100%',}}>
            <View>
                <Ionicons name="lock-closed" style={{fontSize: 20, color: 'gray',}} />
            </View>
              <TouchableOpacity>
                <Ionicons name="eye" style={{fontSize: 20, color: 'black'}} />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="New Password"
              style={{
                paddingHorizontal:30,
                paddingVertical: 10,
                borderBottomColor: '#000',
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View style={{position: 'relative', justifyContent: 'center',marginTop:30}}>
            <View style={{position: 'absolute',flexDirection:'row',justifyContent:'space-between',width:'100%',}}>
            <View>
                <Ionicons name="lock-closed" style={{fontSize: 20, color: 'gray',}} />
            </View>
              <TouchableOpacity>
                <Ionicons name="eye" style={{fontSize: 20, color: 'black'}} />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Re-enter Password"
              style={{
                paddingHorizontal:30,
                paddingVertical: 10,
                borderBottomColor: '#000',
                borderBottomWidth: 1,
              }}
            />
          </View>
        </View>
        <View style={{marginTop:80}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{paddingHorizontal:30,paddingVertical:15,backgroundColor:'#000',borderRadius:50}}>
                <Text style={{textAlign:'center',fontSize:16,fontWeight:'bold',color:'#fff'}}>Change Password</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotNewPass;
