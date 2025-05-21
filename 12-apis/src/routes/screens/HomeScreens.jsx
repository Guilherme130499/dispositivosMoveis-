import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Text, Card, Avatar, IconButton} from 'react-native-paper'
import axios from 'axios'

export default function HomeScreens({ navigation, route }) {

const [usuarios, setUsuarios] = useState([])

useEffect(() =>{
    axios.get('https://dummyjson.com/users?delay=5000')
        .then(resposta => {
            console.log(resposta.data.users)
            setUsuarios(resposta.data.users)
        })
        .catch(erro => {
            console.log(erro)
        })
}, [])


  return (
    <View style={styles.container}>
      <FlatList 
      style={{ marginBottom: 45 }}
      data={usuarios}
      renderItem={({ item }) => (
        <Card
        style={{ margin: 8 }}
        onPress={() => navigation.navigate('UsuarioScreens', item.id)}
        >
            <Card.Title 
            title={item.firstName + "" + item.lastName}
            subtitle={item.email}
            left={(props) => <Avatar.Image {...props} source={{ uri: item.image}} />}
            right={() => <IconButton icon='chevron-right' size={30}/>}
        />
        </Card>
      )}
      />

    </View>
  )
}

const styles = StyleSheet.create({})