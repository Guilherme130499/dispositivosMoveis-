import { StyleSheet, View } from 'react-native'
import { Text, Button, TextInput, Title } from 'react-native-paper'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const acessoLogin = async () => {
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    try { //Recupera dados dos motoristas e usuários salvos no armazenamento local.
      const motoristasSalvos = await AsyncStorage.getItem('motoristas')
      const usuariosSalvos = await AsyncStorage.getItem('usuarios')

      const motoristas = motoristasSalvos ? JSON.parse(motoristasSalvos) : []//Converte as strings recuperadas para arrays JSON (ou vazios, se não houver dados).
      const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : []

      
      const motoristaEncontrado = motoristas.find( //Busca um motorista cujo email e senha correspondam aos digitados (email ignorando letras maiúsculas).
        m => m.email.toLowerCase() === email.toLowerCase() && m.senha === senha
      )

      if (motoristaEncontrado) { {/*Se for encontrado, salva no AsyncStorage como usuarioLogado, exibe mensagem de sucesso e navega para a tela Agendamentos.*/}
        await AsyncStorage.setItem('usuarioLogado', JSON.stringify(motoristaEncontrado))
        alert('Login como motorista realizado com sucesso!')
        navigation.navigate('Agendamentos')
        return
      }

 
      const usuarioEncontrado = usuarios.find( //Se não for motorista, busca agora entre os usuários.
        u => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha
      )

      if (usuarioEncontrado) {//Se encontrado, executa o mesmo processo do motorista.
        await AsyncStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado))
        alert('Login como usuário realizado com sucesso!')
        navigation.navigate('Agendamentos')
        return
      }

      
      alert('Email ou senha incorretos')// Se não encontrar em nenhum dos dois

    } catch (error) {
      alert('Erro ao acessar os dados.')
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}> Login </Title>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={acessoLogin}>
        Entrar
      </Button>

      <Button mode="outlined" onPress={() => navigation.navigate('Cadastro')}>
        Criar conta
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
})
