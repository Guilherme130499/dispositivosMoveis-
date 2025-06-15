//import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {} from '@expo/vector-icons'
import Agendamentos from '../screens/Agendamentos'
import { Drawer, Title } from 'react-native-paper'

const drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
            name='Agendamentos'
            component={Agendamentos}
            options={{
                title: "Início"                
            }}
        />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})