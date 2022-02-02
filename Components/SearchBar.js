import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const SearchBar = () => {
    return (
        <View style={{marginTop:15, flexDirection:'row'}}>
            <GooglePlacesAutocomplete 
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 22,
                        fontWeight: '700',
                        marginTop:7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight:10
                    },
                }}
                renderLeftButton={() => (
                    <View style={{marginLeft:10}}>
                        <Ionicons name='location-sharp' style={{fontSize:24}} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 8,
                        padding: 9,
                        backgroundColor: "#fff",
                        borderRadius:30
                    }}>
                        <AntDesign name='clockcircle' style={{fontSize:11, marginRight:6}} />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SearchBar
