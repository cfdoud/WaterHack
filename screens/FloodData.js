import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function FloodData() {
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
