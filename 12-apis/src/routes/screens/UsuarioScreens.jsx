import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Card, Text } from 'react-native-paper'
import { Axios } from 'axios'

export default function UsuarioScreens({ navigation, route }) {
  
  const idUsuario = route.params
  const [usuario, setUsuario] = useState({})
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("" + idUsuario)
      .then(resposta => {
        setUsuario(resposta.data)
      })
  })
  
  
  
    return (
    <View>
      <Card>
        <Card.Title 
          title={usuario.firstName + " " + usuario.lastName}
          subtitle={usuario.email}
          left={(props) => <Avatar.Image {...props} source={{uri: usuario.image}}/>}
        /> 
        <Card.Content>
            <Text variant='titleLarge'>Dados</Text>
            <Text>Username:</Text>
            <Text>Idade:</Text>
            <Text>Gênero:</Text>
            <Text>Telefone:</Text>
            <Text>Data de nascimento:</Text>
            <Text>Universidade:</Text>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})