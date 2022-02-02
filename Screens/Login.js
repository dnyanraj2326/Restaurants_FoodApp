import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View ,TouchableOpacity,Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Login = ({ navigation }) => {
    const [hidePass, setHidePass] = useState(true);
    return (
        <View style={styles.container}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Image source={{ uri:"https://images.unsplash.com/photo-1572025416011-70c242d3918f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnQlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
            style={{ width: 100, height: 100, borderRadius:100 }} />
        </View>
        <View style={styles.header}>
            <Text style={styles.headerText}>Hey,</Text>
            <Text style={styles.headerText}>Login Now.</Text>
        </View>
        <View style={styles.createSignup}>
                <Text style={styles.createSignupText}>If you are new/ </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.createSignupLink}> Create New</Text>
                    </TouchableOpacity>
        </View>
        <View style={styles.input}>
            <TextInput
            style={styles.inputEmail}    
                    placeholder='Email'
                    textContentType='emailAddress'
                    keyboardType='email-address'
                />
                <TouchableOpacity style={{position:'absolute', right:15, bottom:17, zIndex:1}} onPress={() => setHidePass(!hidePass)}>
                <Ionicons name={hidePass ? "eye-off":"eye"} style={{ fontSize: 22, color: 'black' }} />
                </TouchableOpacity>
            <TextInput 
                style={styles.inputPassword}
                    placeholder='Password'
                    secureTextEntry={hidePass ? true:false}
            />
        </View>
        <View style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Passcode? / </Text>
            <Text style={styles.forgotLink}> Reset</Text>
        </View>
        <View style={styles.btn}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Home')}
            style={styles.button}>
            <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.skip}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.forgotText}>Skip Now</Text>
        </TouchableOpacity>
        </View>
    </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingVertical: 40,
        paddingHorizontal:30
    },
    header: {
        paddingTop:60
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color:'black'
    },
    createSignup: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    createSignupText: {
        color: "#C8C6C6",
        fontWeight:'bold'
    },
    createSignupLink: {
        color: "black",
        fontWeight:'bold'
    },
    input: {
        paddingTop:60
    },
    inputEmail: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical:15,
        marginBottom: 25,
        backgroundColor: '#EEEEEE',
        color: 'black',
        fontWeight: 'bold',
        position:'relative',
    },
    inputPassword: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical:15,
        backgroundColor: '#EEEEEE',
        color: 'black',
        fontWeight:'bold',
        
    },
    forgot: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    forgotText: {
        color: "#C8C6C6",
        fontWeight:'bold'
    },
    forgotLink: {
        color: "black",
        fontWeight:'bold'
    },
    btn: {
        paddingTop: 70,
        
    },
    btnText: {
        color: "black",
        fontWeight: 'bold',
        fontSize:17
    },
    button: {
        backgroundColor: '#5AA897',
        paddingVertical: 15,
        paddingHorizontal: 50,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10
    },
    skip: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:40
    },
    img:{
        width: 60,
        height:60,
    }
})
