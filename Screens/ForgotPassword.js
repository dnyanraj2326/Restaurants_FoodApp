import {View, Text, TextInput, TouchableOpacity,Image} from 'react-native';
import React from 'react';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1, paddingHorizontal: 30}}>
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            borderRadius: 200,
          }}>
          <Image source={require('../assets/images/forgetPass.png')} style={{width:300,height:300}} />
        </View>
        <View style={{paddingTop:20}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#000',
              fontWeight: 'bold',
              paddingBottom: 20,
            }}>
            Did someone forget their password?
          </Text>
          <Text style={{textAlign: 'center', fontSize: 14, paddingBottom: 5}}>
            That's ok...
          </Text>
          <Text style={{textAlign: 'center', fontSize: 14, paddingBottom: 20}}>
            Just enter the email address you've used to register with us and
            we'll send you a reset link!
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <TextInput
            placeholder="Email ID"
            textContentType="emailAddress"
            keyboardType="email-address"
            style={{
              paddingVertical: 14,
              paddingHorizontal: 20,
              borderRadius: 20,
              backgroundColor: '#eee',
            }}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassOtp')}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 14,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:'green',
              marginTop: 40,
              borderRadius:22
            }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
