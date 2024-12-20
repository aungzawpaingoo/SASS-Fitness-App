import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HomeScreen from './screens/HomeScreen';
import BodyMassIndex from './screens/BodyMassIndex';
import SettingsScreen from './screens/SettingsScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="BMI" component={BodyMassIndex} options={{headerShown:false}}/>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='OnboardingScreen'>
      <Stack.Screen name="MainTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown:false}}/>
      <Stack.Screen name='SignInScreen' component={SignInScreen} options={{headerStyle:{backgroundColor:'black'}, headerTintColor:'white', headerTitle:'SignIn To Account'}}/>
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{headerStyle:{backgroundColor:'black'}, headerTintColor:'white', headerTitle:'Create Account'}}/>
    </Stack.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
