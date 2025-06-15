import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
  <Text style={styles.title}>Selecione abaixo o que você quer</Text>

 <Button
    mode="contained"
    onPress={() => navigation.navigate('CadastroMotorista')}
    style={styles.button}
  >
    Realizar Viagens (Motorista)
  </Button>

  <Button
    mode="outlined"
    onPress={() => {
      console.log('Botão pressionado - indo para CadastroUsuario');
      navigation.navigate('CadastroUsuario')}}
    style={styles.button}
  >
    Solicitar Viagens (Usuário)
  </Button>
</View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  }
})