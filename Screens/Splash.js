import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <LottieView
          source={require('../assets/icon/6519-cooking.json')}
          autoPlay
          style={{height: 500, width: '100%'}}
        />
      </View>
      <View style={styles.contains}>
        <Text style={styles.para}>Get Started</Text>
        <Text style={styles.hed}>
          Millions of people use to turn their ideas into reality.
        </Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.skipBtn}>
          <Text style={styles.skipBtnText}>Skip Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },

  para: {
    color: '#C8C6C6',
    fontWeight: 'bold',
  },
  hed: {
    color: 'black',
    width: '80%',
    fontSize: 29,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
  },
  skipBtnText: {
    color: '#C8C6C6',
    fontWeight: 'bold',
  },
  nextBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  nextBtn: {
    paddingVertical: 10,
    paddingHorizontal: 28,
    backgroundColor: '#5AA897',
    borderRadius: 10,
  },
});
