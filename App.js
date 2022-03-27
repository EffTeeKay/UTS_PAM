
import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Homepage';
import Secondpage from './src/screen/Secondpage';
import Thirdpage from './src/screen/Thirdpage';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name='Secondpage' component={Secondpage}/>
        <Stack.Screen name='Thirdpage' component={Thirdpage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
