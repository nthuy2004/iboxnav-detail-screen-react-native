import {NavigationContainer} from '@react-navigation/native';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {navigationRef} from './navigation';
import Home from '../pages/Home';
import VehicleDetail from '../pages/VehicleDetail';

export type RootStackParamList = {
  Home: undefined;
  VehicleDetail: {
    vehicleId: number;
  };
};

const Stack = createStackNavigator();
const index = (): JSX.Element => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    animationEnabled: false,
    cardStyle: {},
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={navigationOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VehicleDetail" component={VehicleDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
