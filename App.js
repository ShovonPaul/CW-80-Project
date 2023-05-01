import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/droverNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function App() {
  return (
    <NavigationContainer>
    <DrawerNavigator />

  
    </NavigationContainer>
  );
}