import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { LogBox, StatusBar } from 'react-native';

import HomeScreen from './src/screens/HomeScreen'
import store from './src/store'
import HomeNavbar from './src/components/HomeNavbar'
import UnderMaintenance from './src/screens/UnderMaintenance'

const Stack = createStackNavigator();

function App() {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <StatusBar hidden={true} />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" 
            component={ HomeScreen } 
            options={{ headerShown: false }}
            />
          <Stack.Screen
              name='Maintenance'
              component={UnderMaintenance}
              options={{ headerShown: false }}
              />
          <Stack.Screen
              name='Navbar'
              component={HomeNavbar}
              />
        </Stack.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}

export default App;