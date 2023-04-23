import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import supabase from "../db/supabaseClient";

async function getAttendee() {

    const date = await supabase.from("flow").select("dadate");
    const stage_height = await supabase.from("flow").select("stage_height");
    const stream_flow = await supabase.from("flow").select("stream_flow");

    console.log("date", date);
    console.log("shit", stage_height);
    console.log("poo", stream_flow);

}



function FloodData() {
    getAttendee();
  return (
    <View style={styles.container}>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
