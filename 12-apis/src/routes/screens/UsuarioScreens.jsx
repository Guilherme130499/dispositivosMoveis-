import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UsuarioScreens({ navigation, route }) {
  
  
  console.log("ID DO USUARIO RECEBIDO: ", route.params)
  
  
    return (
    <View>
      <Text>UsuarioScreens</Text>
    </View>
  )
}

const styles = StyleSheet.create({})