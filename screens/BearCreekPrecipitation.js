import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import supabase from "../db/supabaseClient";


async function getBC() {

  const date = await supabase.from("prec").select("date");
  const pr_daily = await supabase.from("prec").select("pr_daily");

  console.log("date", date);
  console.log("shit", pr_daily);
  // console.log("reste")

}


function BCPrec() {
  getBC();
  return (
    <View style={styles.container}>
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
