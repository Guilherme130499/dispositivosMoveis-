import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreens from './screens/HomeScreens'
import UsuarioScreens from './screens/UsuarioScreens'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
       
        <Stack.Screen name='HomeScreens' 
        component={HomeScreens} 
        options={{title:"Lista de usuarios",
        headerTitleAlign: 'center'
        }}/>
        
        <Stack.Screen name='UsuarioScreens' 
        component={UsuarioScreens} 
        options={{title:"Lista",
        headerTitleAlign: 'center'}}/>
    
    </Stack.Navigator>
  )
}

