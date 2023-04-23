import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function BCFuturePrec() {
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
