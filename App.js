import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './src/state/cartReducer';
import Tabs from './src/navigation/tabs';
import { Restaurant, OrderDelivery, Cart, Map, Login } from './src/screens';

const Stack = createStackNavigator();
const store = createStore(cartReducer)

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App;