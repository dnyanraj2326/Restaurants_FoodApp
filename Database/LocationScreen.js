import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import LocationDB from '../Components/LocationDB';
import Realm from 'realm';

const LocationsSchema = {
  name: 'LocationDb',
  properties: {
    _id: 'int',
    country: 'string',
    state: 'string',
    city: 'string',
    location: 'string',
  },
  primaryKey: '_id',
};

const LocationScreen = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const [realm, setRealm] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    (async () => {
        const realm = await Realm.open({
            path: 'myrealm',
            schema: [LocationsSchema],
        }).then(realm => {

            const locations = realm.objects('LocationDb');
            setLocation([...locations]);
            setRealm(realm);

            try {
                locations.addListener(() => {
                    setLocations([...locations]);
                });
            } catch (error) {
                console.error(`Error updating Location DB  : ${error}`);
            }
        });
    })();
  }, []);
    
    const AddLocations = () => {
        realm.write(() => {
            locations1 = realm.create('LocationDb', {
                _id: Date.now(),
                country: country,
                state: state,
                city: city,
                location: location
            });
        });
        setCountry('');
        setState('');
        setCity('');
        setLocation('');
    }

    const DeleteLocations = (item) => {
        realm.write(() => {
            try {
                let myLocation = realm.objectForPrimaryKey('LocationDb', item._id);
                realm.delete(myLocation);
                myLocation = null;
                realm.refresh();
            } catch (error) {
                console.log(`Error updating Delete Locations  : ${error}`)
            };
        });
    };

  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <Text
        style={{
          textAlign: 'center',
          paddingVertical: 10,
          color: '#000',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Add Location
      </Text>
      <View>
        <TextInput
          placeholder="Country"
          value={country}
          onChangeText={(country) => setCountry(country)}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            backgroundColor: '#eee',
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholder="State"
          value={state}
          onChangeText={(state) => setState(state)}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            backgroundColor: '#eee',
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholder="City"
          value={city}
          onChangeText={(city) => setCity(city)}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            backgroundColor: '#eee',
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholder="Location"
          value={location}
          onChangeText={(location) => setLocation(location)}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            backgroundColor: '#eee',
            marginBottom: 20,
          }}
              />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => AddLocations()}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 14,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green',
            marginTop: 10,
            borderRadius: 22,
          }}>
          <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
          <LocationDB locatinsData={locations} DeleteLocations={DeleteLocations}/>
    </View>
  );
};

export default LocationScreen;
