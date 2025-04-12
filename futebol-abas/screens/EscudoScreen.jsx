import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, Card, Title, Paragraph, } from 'react-native-paper'
import React from 'react'



export default function EscudoScreen() {
  return (
    <ScrollView>
    <View>     

      <Card style={{ width: '90%'}}></Card>
      <Card.Content>
        
        <Title style={{ textAlign: 'center'}}>
          Escudo clube de regatas Flamengo          
        </Title>
        <Paragraph></Paragraph>

        <Card.Cover source={{uri:'https://th.bing.com/th/id/OIP.cBlg19_sWv32sguS2dHEvwHaEo?rs=1&pid=ImgDetMain'}}/>
        <Paragraph></Paragraph>

        <Paragraph style={{ textAlign: 'center'}}>
        O escudo do Flamengo é um dos mais icônicos do futebol brasileiro. Ele possui um formato de escudo clássico, com as cores vermelho e preto em listras horizontais, que são as cores tradicionais do clube. No canto superior esquerdo, aparece o monograma “CRF”, que representa Clube de Regatas do Flamengo, escrito em branco com letras entrelaçadas em estilo elegante. Em algumas versões do escudo, especialmente em uniformes e materiais oficiais, o escudo completo com o monograma é substituído apenas pelo próprio monograma estilizado.

O design representa a tradição e a força do clube carioca, fundado em 1895, e é símbolo de orgulho para a torcida rubro-negra.
          </Paragraph>

          
      </Card.Content>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})