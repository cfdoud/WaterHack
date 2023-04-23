import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


function BCPrec({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
          onPress={() => navigation.navigate('Home')} >
          <Image 
            style={{
              width: 50,
              height: 50,
              }}
            source={
              require('../assets/back.png'
            )}/>
        </TouchableOpacity>
      <Text style={styles.title}>Bear Creek Precipitation</Text>
      {/* Add your content for the Flood Data page here */}
    </View>
  );
}

export default BCPrec;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    
    paddingTop: '10%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
