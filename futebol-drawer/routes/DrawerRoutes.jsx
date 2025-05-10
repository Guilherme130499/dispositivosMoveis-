import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import EscudoScreen from '../screens/EscudoScreen'
import JogadoresScreens from '../screens/JogadoresScreen'
import TitulosScreen from '../screens/TitulosScreen'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
        name='EscudoScreen'
        component={EscudoScreen}
        options={{
            title: "Escudo",
            drawerIcon: ({ color, size }) => <Ionicons 
            name='shield' color={color} size={size}
            /> 
        }}
        />

    <Drawer.Screen 
        name='JogadoresScreen'
        component={JogadoresScreens}
        options={{
            title: "Jogadores",
            drawerIcon: ({ color, size }) => <Ionicons 
            name='football-outline' color={color} size={size}
            /> 
        }}
        />

    <Drawer.Screen 
        name='TitulosScreen'
        component={TitulosScreen}
        options={{
            title: "Titulos",
            drawerIcon: ({ color, size }) => <Ionicons 
            name='trophy-outline' color={color} size={size}
            /> 
        }}
        />

    </Drawer.Navigator>
  )
}

