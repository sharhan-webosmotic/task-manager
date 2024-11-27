import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {navigationRef} from './RootNavigation';
import HomeScreen from '../screens/HomeScreen';
import CustomHeader from '../components/CustomHeader';
import AddTaskScreen from '../screens/AddTaskScreen';
import AlertScreen from '../screens/AlertScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => <CustomHeader />,
            headerShown: true,
          }}
        />
        <Stack.Screen name="AddTask" options={{headerShown:false}} component={AddTaskScreen} />
        <Stack.Screen
          name="Alerts"
          component={AlertScreen}
          options={{
            header: () => <CustomHeader />,
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
