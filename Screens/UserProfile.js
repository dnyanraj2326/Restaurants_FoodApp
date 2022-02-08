import React from 'react';
import {StatusBar, Text, View, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Payment from '../Components/Payment';
import Notification from '../Components/Notification';
import SettingProfile from '../Components/SettingProfile';

const UserProfile = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFCC1D'}}>
      <StatusBar backgroundColor="#FFCC1D" barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingHorizontal: 30,
          marginBottom: 90,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name={'arrow-left'} size={20} color={'black'} />
        </TouchableOpacity>
        <SettingProfile />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          paddingVertical: 20,
          paddingHorizontal: 30,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          flex: 1,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            }}
            style={{
              width: 130,
              height: 130,
              borderRadius: 40,
              position: 'absolute',
              top: -85,
              left: '29%',
            }}
          />
        </View>
        <View style={{position: 'absolute', top: -70, left: '68%'}}>
          <TouchableOpacity>
            <Entypo
              name={'camera'}
              size={20}
              color={'black'}
              style={{
                backgroundColor: '#5AA897',
                width: 40,
                height: 40,
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 57}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
            }}>
            Mr.Mayur Patil
          </Text>
        </View>
        <View style={{marginTop: 50}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EEEEEE',
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 7,
            }}>
            <View style={{paddingRight: 15}}>
              <Entypo name={'mobile'} size={27} color={'orange'} />
            </View>
            <View>
              <Text style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
                Phone Number
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                  paddingTop: 7,
                }}>
                + 9685741425
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EEEEEE',
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 7,
              marginTop: 30,
            }}>
            <View style={{paddingRight: 15}}>
              <MaterialCommunityIcons
                name={'email'}
                size={27}
                color={'orange'}
              />
            </View>
            <View>
              <Text style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
                Mail
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                  paddingTop: 7,
                }}>
                uberfood45@gmail.com
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 120}}>
          <Payment />
          <Notification />
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
