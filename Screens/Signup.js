import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Realm from 'realm';

const SignupAuthSchema = {
  name: 'SignupAuth',
  properties: {
    _id: 'int',
    username: 'string',
    mobile: 'string',
    email: 'string',
    password: 'string',
  },
  primaryKey: '_id',
};

const Signup = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);

  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [realm, setRealm] = useState(null);
  const [signup, setSignup] = useState([]);


  useEffect(() => {
    (async () => {
      const realm = await Realm.open({
        path: 'myrealm',
        schema: [SignupAuthSchema],
      })
        const signup = realm.objects('SignupAuth');
    
        setRealm(realm)
        try {
          signup.addListener(() => {
            setSignup([...signup]);
          });
        }
        catch (error) {
          console.error(`Error updating signup  : ${error}`);
        }
    })();
  }, []);
  
 
  const AddSignup = () => {
    realm.write(() => {
      signup1 = realm.create('SignupAuth', {
        _id: Date.now(),
        username: username,
        mobile: mobile,
        email: email,
        password: password,
      });
    });
    // navigation.push('Login', {
    // })
    setUsername('')
    setMobile('');
    setEmail('');
    setPassword('');
  }

  return (
    <View

      style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack('Login')}>
        <FontAwesome5 name={'arrow-left'} size={20} color={'black'} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.hedText}>Create Account</Text>
        <Text style={styles.hedPara}>Please fill the input blow hear</Text>
      </View>
      <View onPress={Keyboard.dismiss} style={styles.inputs}>
        <TextInput
          placeholder="Full Name"
          value={username}
          onChangeText={(username) => setUsername(username)}
          style={styles.input} />
        <TextInput
          placeholder="Enter Mobile Number"
          value={mobile}
          onChangeText={(mobile) => setMobile(mobile)}
          style={styles.input} />
        <TextInput
          placeholder="Enter Email id"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.input} />
        <TouchableOpacity
          style={{position: 'absolute', right: 15, bottom: 115, zIndex: 1}}
          onPress={() => setHidePass(!hidePass)}>
          <Ionicons
            name={hidePass ? 'eye-off' : 'eye'}
            style={{fontSize: 22, color: 'black'}}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={hidePass ? true : false}
          style={styles.input}
        />
        <TextInput placeholder="Enter Comform Password" style={styles.input} />
      </View>
      <View style={styles.opacityButton}>
        <TouchableOpacity
          onPress={() => AddSignup()}
          style={styles.button}>
          <Text style={styles.btnText}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.account}>
        <Text style={styles.accountText}>Already have a account? / </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.accountLink}>Login</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* {
          signup?.map((auth) => {
            return (
              <View key={auth._id} style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <Text>{auth.username}</Text>
                <Text>{auth.mobile}</Text>
                <Text>{auth.email}</Text>
                <Text>{auth.password}</Text>
              </View>
            )
          })
         }  */}
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 0,
  },
  hedText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  hedPara: {
    textAlign: 'center',
    color: '#C8C6C6',
    fontWeight: 'bold',
  },
  inputs: {
    paddingTop: 50,
  },
  input: {
    marginBottom: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    color: 'black',
  },
  inputPass: {
    marginBottom: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    color: 'black',
    position: 'relative',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AA897',
    paddingVertical: 18,
    borderRadius: 12,
  },
  btnText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  opacityButton: {
    paddingTop: 50,
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  accountText: {
    color: '#C8C6C6',
    fontWeight: 'bold',
  },
  accountLink: {
    color: '#5AA897',
    fontWeight: 'bold',
  },
});
