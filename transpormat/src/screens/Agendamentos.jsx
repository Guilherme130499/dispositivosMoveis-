import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import Cadastro from './Cadastro'

export default function Agendamentos(props) {

  const { navigation, route } = props

  console.log("NAVIGATION => ", navigation)

  console.log("ROUTE => ", route)
  
  return (
    <View>
      <Text>Agendamentos</Text>
      <Button
        mode="contained"
    onPress={() => navigation.navigate('HomeTabs', { screen: 'Cadastro' })}
      >
  Ir para tela Cadastro
</Button>

    </View>
  )
}

const styles = StyleSheet.create({})