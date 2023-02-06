import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {NaavigationContainer} from '@react-navigation/native';
import {createStackNavigatior} from '@react-navigation/stack';

import Splash from './src/screen/splash';

const Stack = createStackNavigatior();

export default function App() {
  return (
    <NaavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash"/>
      </Stack.Navigator>
    </NaavigationContainer>
  );
}