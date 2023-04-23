import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import supabase from "../db/supabaseClient";


async function getAttendee() {

    const date = await supabase.from("future").select("date");
    const v1 = await supabase.from("future").select("v1");
    const v2 = await supabase.from("future").select("v2");
    const v3 = await supabase.from("future").select("v3");
    const v4 = await supabase.from("future").select("v4");
    const v5 = await supabase.from("future").select("v5");
    const v6 = await supabase.from("future").select("v6");
    const v7 = await supabase.from("future").select("v7");
    const v8 = await supabase.from("future").select("v8");
    const v9 = await supabase.from("future").select("v9");
    // const v10 = await supabase.from("future").select("v10");
    // const v11 = await supabase.from("future").select("v11");
    // const v12 = await supabase.from("future").select("v12");
    // const v13 = await supabase.from("future").select("v13");
    // const v14 = await supabase.from("future").select("v14");
    // const v15 = await supabase.from("future").select("v15");
    // const v16 = await supabase.from("future").select("v16");
    // const v17 = await supabase.from("future").select("v17");
    // const v18 = await supabase.from("future").select("v18");
    // const v19 = await supabase.from("future").select("v19");
    // const v20 = await supabase.from("future").select("v20");

  
    console.log("date2", date);
    console.log("shit", v1);
    console.log("shit", v2);
    console.log("shit", v3);
    console.log("shit", v4);
    console.log("shit", v5);
    console.log("shit", v6);
    console.log("shit", v7);
    console.log("shit", v8);
    console.log("shit", v9);
    // console.log("shit", v10);
    // console.log("shit", v11);
    // console.log("shit", v12);
    // console.log("shit", v13);
    // console.log("shit", v14);
    // console.log("shit", v15);
    // console.log("shit", v16);
    // console.log("shit", v17);
    // console.log("shit", v18);
    // console.log("shit", v19);
    // console.log("shit", v20);
  
  }

function BCFuturePrec() {
    getAttendee();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Future</Text>
      {/* Add your content for the Flood Data page here */}
    </View>
  );
}

export default BCFuturePrec;

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
