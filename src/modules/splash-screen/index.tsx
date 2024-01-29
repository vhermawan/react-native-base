import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { splashScreenStyles } from './styles';
import { Svg } from '@components';
import { SPLASH_1 } from '@images';

function SplashScreen() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['rgba(227, 235, 255, 1)', 'rgba(56, 111, 254, 0.51)']}
      style={[splashScreenStyles.container]}
    >
      <View>
        <Text>SplashScreen test</Text>
        <Svg images="splash_1"/>
      </View>
    </LinearGradient>
  );
}

export default SplashScreen;
