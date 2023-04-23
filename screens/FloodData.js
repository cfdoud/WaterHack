import React from 'react';
import { StyleSheet, Text, View, Image, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import supabase from "../db/supabaseClient";

async function getAttendee() {
    const data = await supabase.from("flow").select("dadate");

    console.log("shit", data);

}


function FloodData({navigation}) {
    getAttendee();
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
      <Text style={styles.title}>Flood Data</Text>
      {/* Add your content for the Flood Data page here */}
    </View>
  );
}

export default FloodData;

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
