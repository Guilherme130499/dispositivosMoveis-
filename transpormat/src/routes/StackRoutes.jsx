import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Veiculos from '../screens/Veiculos';
import Cadastro from '../screens/Cadastro';
import Login from '../screens/Login';
import Agendamentos from '../screens/Agendamentos';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Veiculos" component={Veiculos} />
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Agendamentos"
        component={Agendamentos}
        options={{
          title: 'Tela de Agendamentos',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
