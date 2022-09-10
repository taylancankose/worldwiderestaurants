import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import Home from './screens/Home';
import First from './screens/Slider/FirstSlide/FirstSlide';
import Second from './screens/Slider/SecondSlide/SecondSlide';
import Third from './screens/Slider/ThirdSlide/ThirdSlide';

const Stack = createNativeStackNavigator();

function Router() {
  const Slider = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
          name="First"
          component={First}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
          name="Second"
          component={Second}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
          name="Third"
          component={Third}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
          name="Slider"
          component={Slider}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
