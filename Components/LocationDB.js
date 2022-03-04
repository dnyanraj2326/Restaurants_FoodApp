import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LocationDB = props => {
  return (
    <View>
      <Text
        style={{
          alignItems: 'center',
          textAlign: 'center',
          paddingVertical: 10,
          color: '#000',
          fontWeight: 'bold',
          fontSize: 15,
        }}>
        Location Database
      </Text>
      {props.locatinsData.map(data => {
        return (
          <View
            key={data._id}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  alignItems: 'center',
                  textAlign: 'center',
                  paddingVertical: 10,
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                {data.country}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  alignItems: 'center',
                  textAlign: 'center',
                  paddingVertical: 10,
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                {data.state}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  alignItems: 'center',
                  textAlign: 'center',
                  paddingVertical: 10,
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                {data.city}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  alignItems: 'center',
                  textAlign: 'center',
                  paddingVertical: 10,
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                {data.location}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => props.DeleteLocations(data)}>
                <MaterialCommunityIcons
                  name={'delete-forever'}
                  size={22}
                  color={'red'}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default LocationDB;
