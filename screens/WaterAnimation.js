import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';

const { height } = Dimensions.get('window');

const WaterAnimation = ({ navigation }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    // Animate the progress from 0 to 1 over 2 seconds
    progress.value = withTiming(1, { duration: 2000, easing: Easing.linear });
    // Navigate to the home screen after the animation finishes
    const timeoutId = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [navigation, progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [-height, 0]);
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animation, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  animation: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height,
    backgroundColor: '#00BFFF',
  },
});

export default WaterAnimation;
