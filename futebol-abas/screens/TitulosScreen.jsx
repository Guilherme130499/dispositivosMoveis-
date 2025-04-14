import { StyleSheet, View } from 'react-native'
import { Text, Card, Title, Paragraph, } from 'react-native-paper'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { FlatList } from 'react-native'



export default function TitulosScreen() {

  const titulos = [
    {
    nome: "Campeonato Brasileiro",
    anos: [1999, 1999, 1999, 1999],
    imagem: ""
    },
    {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022],
    imagem: ""
    },
    {
    nome: "Copa do Brasil",
    anos: [2013,2024],
    imagem: ""
    },
    {
    nome: "Supercopa Libertadores",
    anos: [1900],
    imagem: ""
    },
    {
    nome: "Recopa Sulamericana",
    anos: [1998],
    imagem: ""
    },
    ];


  return (
    <PaperProvider>
      <View style={styles.container}>
      <StatusBar style="auto" />

      <Text variant='displaySmall'>Lista de títulos</Text>

      <FlatList
        data={titulos}
        renderItem={({ item }) => (
          <Card style={styles.card}>
          <Card.Cover source={{ uri: item.imagem }} />
          <Card.Content>
            <Title>{item.nome}</Title>
            <Paragraph>Anos que conquistou: {item.anos.join(', ')}</Paragraph>
          </Card.Content>
        </Card>
        )}
      />
    </View>
    </PaperProvider>
    );
  }
  


const styles = StyleSheet.create({})