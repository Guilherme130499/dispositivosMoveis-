import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Card, Text, Button} from 'react-native-paper'

export default function Controle() {
  
    const [volume, setVolume] = useState(0);

    function aumentar() {
        setVolume(volume + 1)
    }

    function diminuir() {
        setVolume(volume - 1)
    }
  
    return (
    <View>
      <Card>
        <Card.Content>
            <Card.Title title="Componente Controle"></Card.Title>
            <Text variant='displayMedium'> Volume:{volume} </Text>
        </Card.Content>
        <Card.Actions>
            <Button
            mode='contained-total'
            icon='minus'
            onPress={diminuir}
            >
                mostrar
            </Button>
            <Button
            mode='contained'
            icon='plus'
            onPress={aumentar}
            >
                mostrar
            </Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})
