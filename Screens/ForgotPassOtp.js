import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';


const ForgotPassOtp = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1, paddingHorizontal: 30}}>
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <LottieView
            source={require('../assets/icon/88963-send-sms.json')}
            autoPlay
            style={{height: 330, width: '100%'}}
          />
        </View>
        <View style={{paddingTop: 20}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#000',
              fontWeight: 'bold',
              paddingBottom: 20,
            }}>
            Please enter your verification code.
          </Text>
          <Text style={{textAlign: 'center', fontSize: 14, paddingBottom: 20}}>
            We have send verification code to your registered email ID.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingTop: 40,
            paddingBottom: 20,
          }}>
          <View style={{marginRight: 5}}>
            <TextInput
              placeholder="8"
              style={{
                backgroundColor: '#eee',
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderRadius: 20,
                textAlign: 'center',
              }}
            />
          </View>
          <View style={{marginRight: 5}}>
            <TextInput
              placeholder="4"
              style={{
                backgroundColor: '#eee',
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderRadius: 20,
                textAlign: 'center',
              }}
            />
          </View>
          <View style={{marginRight: 5}}>
            <TextInput
              placeholder="7"
              style={{
                backgroundColor: '#eee',
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderRadius: 20,
                textAlign: 'center',
              }}
            />
          </View>
          <View style={{marginRight: 5}}>
            <TextInput
              placeholder="1"
              style={{
                backgroundColor: '#eee',
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderRadius: 20,
                textAlign: 'center',
              }}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotNewPass')}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 14,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'green',
              marginTop: 40,
              borderRadius: 22,
            }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassOtp;
