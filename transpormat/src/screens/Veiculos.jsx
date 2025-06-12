import { StyleSheet, View, ScrollView } from 'react-native'
import { Card, Text, Title, Button } from 'react-native-paper'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Veiculos( {navigation} ) {

 

  return (
    <ScrollView>
    <View>
    <Card style={{ width: '100%'}}>
        <Card.Content>
            <Text style={{ textAlign: 'center'}}>Aloooooooooooooooooooooooooo</Text>
            <Title style={{ textAlign: 'center'}}>Aloooooooooooooooooooooooooooooooooooooooooooooo</Title>
        </Card.Content>
        <Button
        title="Ir para Agendamentos"
        onPress={() => navigation.navigate('Agendamentos')}
        style={{ margin: 10 }}
      />
    </Card>
    </View>
    </ScrollView>
  )
}

