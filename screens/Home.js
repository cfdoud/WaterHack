import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import logo from '../assets/logo.png';
import test from '../assets/waterhack_logo.png';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column', 
          paddingLeft: '20%',
        }}> 
            <Image 
            style={{
              position: 'absolute',
              width: 80,
              height: 80,
              top: -25,
              bottom: 0,
              left: 30,
            }}
            source={
              require('../assets/logo.png'
            )} />
            <Text
              style={{
              fontWeight: 'bold',
              fontSize: 30,
              color: 'white',
              paddingLeft: '5%',
            }}>
        
            WaterHack</Text> 
          
          <Text
          style={{
            paddingLeft: '20%',
            fontWeight: 'bold',
            fontSize: 25,
            color: 'white',
          }}>
            by HydroHomies
          </Text>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            paddingTop: '35%',

          }}>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Flood Data')}>
              <Text style={styles.buttonText}>Flooding Data</Text>
            </TouchableOpacity>

      
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bear Creek Precipitation')}>
              <Text style={styles.buttonText}>Bear Creek Precipitation Data</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Future')}>
              <Text style={styles.buttonText}>Bear Creek Precipitation Future Data</Text>
            </TouchableOpacity>
        </View> 
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingTop: '30%',
    
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  button: {
    backgroundColor: '#2e5bff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    borderColor: '#00bfff',
    borderWidth: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});
