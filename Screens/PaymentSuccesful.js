import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const PaymentSuccesful = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 30}}>
      <StatusBar backgroundColor="white" />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <LottieView
          source={require('../assets/icon/89618-gopay-succesfull-payment.json')}
          autoPlay
          style={{height: 250, width: '100%'}}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'green',
            textAlign: 'center',
          }}>
          Payment successful
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 160,
        }}>
        <LottieView
          source={require('../assets/icon/8980-order-status-for-food-delivery.json')}
          autoPlay
          style={{height: 250, width: '100%'}}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 40,
            paddingVertical: 16,
            backgroundColor: 'green',
            marginHorizontal: 60,
            borderRadius: 40,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
            Track Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentSuccesful;
