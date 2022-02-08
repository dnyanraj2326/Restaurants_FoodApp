import {View, Text, TouchableOpacity, Modal, Alert} from 'react-native';
import React, {useState} from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const SettingProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('SettingProfile has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 80,
          }}>
          <View
            style={{
              margin: 0,
              backgroundColor: '#F7F7F7',
              borderRadius: 40,
              paddingHorizontal: 0,
              paddingVertical: 15,
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}>
            <View style={{width: '90%'}}>
            <View style={{paddingBottom:30,paddingTop:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:20,color:'#000',fontWeight:'bold'}}>Setting</Text>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <Ionicons name={'close'} size={25} color={'#000'} />
                </TouchableOpacity>
            </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <View style={{paddingRight: 15}}>
                  <Ionicons name={'information-circle'} size={27} color={'orange'} />
                </View>
                <View>
                  <Text
                    style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
                    Change Information
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <View style={{paddingRight: 15}}>
                  <MaterialCommunityIcons name={'lock'} size={27} color={'orange'} />
                </View>
                <View>
                  <Text
                    style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
                    Change Password
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <View style={{paddingRight: 15}}>
                  <Ionicons
                    name={'location'}
                    size={27}
                    color={'orange'}
                  />
                </View>
                <View>
                  <Text
                    style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
                    Your location
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <View style={{paddingRight: 15}}>
                  <Entypo name={'users'} size={27} color={'orange'} />
                </View>
                <View>
                  <Text
                    style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
                    Invite Friends
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 20,
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <View style={{paddingRight: 15}}>
                  <Foundation name={'page-copy'} size={27} color={'orange'} />
                </View>
                <View>
                  <Text
                    style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
                    Policy Provision
                  </Text>
                </View>
              </View>
            </View>
            <View style={{paddingTop:20}}>
                <Text style={{textAlign:'center'}}>Version 2.1</Text>
                <Text style={{textAlign:'center',paddingTop:1}}>UberEats Pvt</Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 25,
                padding: 10,
                elevation: 2,
                backgroundColor: '#2196F3',
                marginTop:30
              }}
              >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  paddingHorizontal: 60,
                  paddingVertical:5
                }}>
                LOG OUT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Ionicons name={'settings-sharp'} size={22} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default SettingProfile;
