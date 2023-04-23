import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const FloodData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Flood')
      .onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      });

    // Unsubscribe from the listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <View>
      {data.map((item) => (
        <Text key={item.id}>{JSON.stringify(item)}</Text>
      ))}
    </View>
  );
};

export default FloodData;
