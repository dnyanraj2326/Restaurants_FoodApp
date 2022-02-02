import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            
                <View style={styles.hedImage}>
            <Image source = {{uri:"https://images.unsplash.com/photo-1587578855694-7e2c29dfd6c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}} style={styles.hedImg}/>
                </View>
                <View style={styles.contains}>
                    <Text style={styles.para}>Get Started</Text>
                    <Text style={styles.hed}>Millions of people use to turn their ideas into reality.
                    </Text>
            </View>
            <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.skipBtn}>
                <Text style={styles.skipBtnText}>Skip Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}  style={styles.nextBtn}>
                <Text style={styles.nextBtnText}>Next</Text>
            </TouchableOpacity>
                </View>
            </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingVertical: 40,
        paddingHorizontal:30
    },
    img:{
        width: 60,
        height:60,
    },
    hedImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    hedImg: {
        width: '100%',
        height: 490,
    },
    para: {
        color: "#C8C6C6",
        fontWeight:"bold"
    },
    hed: {
        color: 'black',
        width: "80%",
        fontSize: 29,
        fontWeight: 'bold',
        paddingTop:20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop:60
    },
    skipBtnText: {
        color: "#C8C6C6",
        fontWeight:"bold"
    },
    nextBtnText: {
        color: "white",
        fontWeight:"bold"
    },
    nextBtn: {
        paddingVertical: 10,
        paddingHorizontal: 28,
        backgroundColor: '#5AA897',
        borderRadius:10

    }
})
