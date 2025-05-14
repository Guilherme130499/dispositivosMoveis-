import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import {Card, Button, Text} from 'react-native-paper'

export default function NomeNumero() {

const [nome, setNome] = useState("??")

function mostrarNomeNumero() {
    setNome("Lucas")

}

  return (
    <View>
      <Card>
        <Card.Content>
            <Card.Title title="Componente NomeNumero"/>
            <Text variant='displayMedium'> Nome: {nome}</Text>
        </Card.Content>
        <Card.Actions>
            <Button onPress={mostrarNomeNumero}>Teste</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})