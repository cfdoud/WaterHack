import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./screens/Home";
import FloodData from './screens/FloodData';
import BearCreekPrecipitation from './screens/BearCreekPrecipitation';
import Future from './screens/Future';
import WaterAnimation from './screens/WaterAnimation';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          
      
          <Stack.Screen
            name="Home"
            component={Home}
            screenOptions={{
            headerShown: false
          }}
       
        />
        
        <Stack.Screen name="Flood Data" component={FloodData} />
        <Stack.Screen name="Bear Creek Precipitation" component={BearCreekPrecipitation} />
        <Stack.Screen name="Future" component={Future} />
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
