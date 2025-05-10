import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Button, Card } from 'react-native-paper'

export default function ListaScreen({ navigation, route }) {
  
  const carros = [
    {
        nome: "Gol",
        ano: "2012",
        cor: "Azul",
        fabricante: "Wolkswagen"
  
    },

    {
        nome: "GolF",
        ano: "2012",
        cor: "Azul",
        fabricante: "Wolkswagen"
  
    },

    {
        nome: "Polo",
        ano: "2012",
        cor: "Azul",
        fabricante: "Wolkswagen"
  
    },

]
  
  
    return (
    <View>
      <FlatList 
        data={carros}
        renderItem={({ item }) => (
            <Card style={{ margin: 10 }}>
                <Card.Content>
                    <Text>Carro: {item.nome}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button
                        mode='conteined'
                        icon='arrow-right'
                        onPress={() => navigation.navigate('ItemScreen', { item })}
                        >
                        Ver detalhes
                    </Button>
                    </Card.Actions>
            </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})