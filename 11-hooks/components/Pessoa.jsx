import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Card, Text, Button} from 'react-native-paper'

export default function Pessoa() {
  
  const  [pessoa, setPessoa] = useState({})
  
  function revelar(){
    const novaPessoa = {
        nome: "Messi",
        idade: "35",
        imagem: "https://th.bing.com/th/id/R.f47ee5767879658963b59bfb014e276e?rik=zD86HlB9nUblQA&riu=http%3a%2f%2fpm1.narvii.com%2f8159%2f46b285cf5f4e7e28416ca13e929c4903d6a5b698r1-720-727v2_uhq.jpg&ehk=hPf010bx7NUmc%2fjm5xMvNmhr3suomCcY37S0DhRshgs%3d&risl=&pid=ImgRaw&r=0"
      }
      setPessoa(novaPessoa)
  } 

  function revelar2(){
    const novaPessoa = {
        nome: "Neymar",
        idade: "98",
        imagem: "https://th.bing.com/th/id/R.11483e4e3eb5f6cf545a3c0d7c1f05cf?rik=wCihAkQJR81ejg&pid=ImgRaw&r=0"
      }
      setPessoa(novaPessoa)
  } 
  
  
  
    return (
    <View>
    <Card>
        <Card.Content>
            <Text variant='displaySmall'>Componente Pessoa</Text>
            <Text variant='displaySmall'>Nome: {pessoa.nome}</Text>
            <Text variant='displaySmall'>Idade: {pessoa.idade}</Text>
            <Card.Cover source={{uri: pessoa.imagem}} />
        </Card.Content>
        <Card.Actions>
            <Button onPress={revelar}>Revelar</Button>
            <Button onPress={revelar2}>Revelar</Button>
        </Card.Actions>
    </Card>
    </View>
  )
}

const styles = StyleSheet.create({})