import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Veiculos from './screens/Veiculos'
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import Agendamentos from './screens/Agendamentos';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
        <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen
          name='Veiculos'
          component={Veiculos}
        />

        <Tab.Screen 
        name='Cadastro'
        component={Cadastro}
        />

        <Tab.Screen 
        name='Login'
        component={Login}
        />

        <Tab.Screen 
        name='Agendamentos'
        component={Agendamentos}
        />
        </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider> 

      

        
  );
}



