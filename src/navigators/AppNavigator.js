import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
