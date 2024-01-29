import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { SplashScreen, Onboarding, Home, Profile } from '@modules/index';
import { useEffect, useState } from 'react';

enableScreens();

function StackNav() {
  const [isLoading, setLoading] = useState(true);

  const SplashStack = createNativeStackNavigator();
  const PrivateStack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  if (isLoading) {
    return (
      <NavigationContainer>
        <SplashStack.Navigator>
          <SplashStack.Screen
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
            name="SplashScreen"
            component={SplashScreen}
          />
        </SplashStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <PrivateStack.Navigator>
        <PrivateStack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
        <PrivateStack.Screen name="Profile" component={Profile} />
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
