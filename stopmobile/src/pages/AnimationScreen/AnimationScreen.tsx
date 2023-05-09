import React, {useRef, useState} from 'react';
import styles from './AnimationScreen.styles';
import {Image, View, Animated} from 'react-native';
import {AppState} from 'react-native';
import {TouchableOpacity, Text} from 'react-native';

const logo = require('../../assets/logo/MySpace.png');

function AnimationScreen() {
  const [animation, setAnimation] = useState(new Animated.Value(0.5));

  AppState.addEventListener('change', state => {
    if (state === 'active') {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }
  });

  const animatedStyle = {
    transform: [{scale: animation}],
    opacity: animation,
  };

  return (
    <View style={styles.AnimationScreen}>
      <Animated.View style={[animatedStyle]}>
        <Image source={logo} style={styles.imgAnimatiom} />
      </Animated.View>
    </View>
  );
}

//     AppState.addEventListener('change', state => {
//         if (state === 'active') {
//             Animated.timing(scaleValue, {
//                 toValue: 1,
//                 duration: 1000,
//                 useNativeDriver: true,
//               }).start(() => {
//                 scaleValue.setValue(1);
//               });
//         }
//       });

//     const scaleValue = useRef(new Animated.Value(1.3)).current;

//   return (
//     <View style={styles.AnimationScreen} >
//         <View>
//       <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
//         <Image source={logo} style={styles.imgAnimatiom}/>
//         </Animated.View>
//         </View>
//     </View>
//   );

export default AnimationScreen;
