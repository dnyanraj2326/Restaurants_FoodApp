import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NotificationData from './NotificationData';

const Notification = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 270,
          }}>
          <View
            style={{
              margin: 0,
              backgroundColor: '#F7F7F7',
              borderRadius: 20,
              paddingHorizontal: 0,
              paddingVertical: 15,
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{marginTop: 3, width: '90%', paddingHorizontal: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: 10,
                  }}>
                  <Text
                    style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
                    NOTIFICATIONS
                  </Text>
                  <MaterialIcons
                    name={'notifications'}
                    size={22}
                    style={{color: 'orange', paddingRight: 10}}
                  />
                </View>
                {NotificationData.map((product, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#fff',
                        paddingHorizontal: 10,
                        paddingVertical: 15,
                        borderRadius: 7,
                        marginBottom: 10,
                        alignItems: 'center',
                      }}>
                      <View style={{paddingRight: 15}}>
                        <Image
                          source={{uri: product.image}}
                          style={{width: 80, height: 80, borderRadius: 20}}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 15,
                            fontWeight: 'bold',
                          }}>
                          {product.title}
                        </Text>
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: 12,
                            fontWeight: 'normal',
                            paddingTop: 7,
                            flexWrap: 'wrap',
                            paddingRight: 90,
                          }}>
                          {product.discription}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: '#2196F3',
                marginTop: 25,
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  paddingHorizontal: 20,
                }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          backgroundColor: '#eee',
          paddingVertical: 20,
          borderRadius: 30,
          marginTop: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}>
            NOTIFICATION
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name={'notifications'}
            size={22}
            style={{color: 'orange', paddingRight: 10, position: 'relative'}}
          />
          <Text
            style={{
              position: 'absolute',
              right: 7,
              top: -6,
              backgroundColor: 'red',
              paddingHorizontal: 5,
              paddingVertical: 1,
              borderRadius: 100,
              fontSize: 10,
              color: '#fff',
            }}>
            2
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default Notification;
