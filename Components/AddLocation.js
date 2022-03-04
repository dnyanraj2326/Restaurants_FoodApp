import {View, Text} from 'react-native';
import React from 'react';

const AddLocation = (props) => {
  return (
    <View>
      <View style={{marginTop: 20}}>
        <TextInput
          placeholder="Email ID"
          textContentType="emailAddress"
          value={username}
          onChangeText={username => setUsername(username)}
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
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassOtp')}
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
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddLocation;
