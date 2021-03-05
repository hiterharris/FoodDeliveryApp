import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/tabs';
import { Restaurant, OrderDelivery, Cart, Map, Login } from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Login'}
      >
        <Stack.Screen name='Home' component={Tabs}/>
        <Stack.Screen name='Restaurant' component={Restaurant}/>
        <Stack.Screen name='OrderDelivery' component={OrderDelivery}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Map' component={Map}/>
        <Stack.Screen name='Login' component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;