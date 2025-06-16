import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Button } from 'react-native-paper' //importando componentes do React-native-paper
import React from 'react'
import { useNavigation } from '@react-navigation/native'//Importando hook useNavigation, usado para navegar entre telas manualmente dentro de um componente.

export default function Cadastro() {
  const navigation = useNavigation();//Usando hook useNavigation para obter o objeto navigation, que permite navegar entre telas com navigate().

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