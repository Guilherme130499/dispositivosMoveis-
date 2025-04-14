import { StyleSheet, View } from 'react-native'
import { Text, Card, Title, Paragraph, } from 'react-native-paper'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { FlatList } from 'react-native'


export default function JogadoresScreen() {
  
  const jogadores = [
    {
    nome: "Arrascaeta",
    numero: 10,
    imagem: ""
    },
    {
    nome: "Nome Jogador c",
    numero: 10,
    imagem: ""
    },
    {
    nome: "Nome Jogador b",
    numero: 7,
    imagem: ""
    },
    {
    nome: "Nome Jogador a",
    numero: 15,
    imagem: ""
    },
    {
    nome: "Nome Jogador",
    numero: 10,
    imagem: ""
    },
    ];
  
  return (
    <PaperProvider>
      <View style={styles.container}>
      <StatusBar style="auto" />

      <Text variant='displaySmall'>Lista de Jogadores</Text>

      <FlatList
        data={jogadores}
        renderItem={({ item }) => (
          <Card style={styles.card}>
          <Card.Cover source={{ uri: item.imagem }} />
          <Card.Content>
            <Title>{item.nome}</Title>
            <Paragraph>Número: {item.numero}</Paragraph>
          </Card.Content>
        </Card>
        )}
      />
    </View>
    </PaperProvider>
    );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  Card: {
    marginBottom: 15,
    width: '90%',
  },
});