import { ScrollView, StyleSheet, View } from 'react-native'
import { Card, Title, Paragraph, } from 'react-native-paper'
import React from 'react'



export default function TitulosScreen() {
  return (
   <ScrollView>
   <View>      

<Card style={{ width: '90%'}}></Card>
      <Card.Content>
        <Title style={{ textAlign: 'center'}}>
          O maior time do Brasil         
        </Title>
        <Paragraph></Paragraph>

        <Card.Cover source={{uri:'https://i.pinimg.com/originals/75/3f/30/753f30f48a0292cf8b9665e11fe4e9b0.jpg'}} style={{ width: 300, height: 300, alignSelf:'center'}}/>
        <Paragraph></Paragraph>
        <Paragraph style={{ textAlign: 'center'}}>
        Gerson Santos da Silva, mais conhecido como Gerson, é um meio-campista brasileiro nascido em Belford Roxo, Rio de Janeiro, em 20 de maio de 1997. Reconhecido por sua versatilidade, é capaz de atuar como volante, meia central ou ofensivo, destacando-se pela visão de jogo, passes precisos e capacidade de chegada à frente</Paragraph>
        
        <Paragraph style={{ textAlign: 'center'}}>
        Sua trajetória no futebol profissional começou nas categorias de base do Fluminense, mas foi no Flamengo que ele ganhou notoriedade. Entre 2019 e 2021, Gerson foi peça-chave na equipe rubro-negra, conquistando títulos importantes como a Libertadores, o Campeonato Brasileiro e a Supercopa do Brasil. Após uma passagem pelo Olympique de Marselha, retornou ao Flamengo em 2023, assinando contrato até 2027.</Paragraph>       
        
        <Paragraph style={{ textAlign: 'center'}}>
        Em sua segunda passagem pelo clube, Gerson completou 200 jogos pelo Flamengo, acumulando 15 gols e 28 assistências. Além disso, assumiu um papel de liderança na equipe, destacando-se como capitão e contribuindo significativamente para o desempenho da equipe em competições nacionais e internacionais.</Paragraph>
                
        
        
          
      </Card.Content>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})