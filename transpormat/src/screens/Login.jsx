import { StyleSheet, View } from 'react-native'
import { Text, Button, TextInput, Title } from 'react-native-paper'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {
  const navigation = useNavigation() //alterna entre telas

  const [email, setEmail] = useState(''); // começando com o campo vazio e armazenando o que for digitado
  const [senha, setSenha] = useState('');

  const acessoLogin = async () => { //logica para validar que os campos foram preenchidos, sendo verdadeiro direciona para outra tela  

    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const motoristaSalvo = await AsyncStorage.getItem('motorista');
    if (!motoristaSalvo) {
      alert('Usuário não cadastrado!');
      return;
    }
    const motorista = motoristaSalvo ? JSON.parse(motoristaSalvo) : null

    if (motorista.email === email && motorista.senha === senha) {
      alert('Login bem-sucedido!');
      navigation.navigate('Agendamentos'); // // Se todas as validações passaram, navega para Agendamentos
    } else {
      alert('Email ou senha incorretos');
    }
  };

  //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; falta validar essa variavel para receber apenas type gmail


  return ( //aqui começamos a parte visual
    <View style={styles.container}>
      <Title style={styles.title}> Login </Title>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail} //atualiza o estado com o que for digitado
        keyboardType='email-address' //ativa o teclado com @ e .
        autoCapitalize='none' //evita que a primeira letra seja maiuscula  
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry //oculta caracteres
      />

      <Button
        mode='contained' //botão com fundo preenchido
        onPress={acessoLogin}
      >
        Entrar
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Cadastro')}
      >
        Criar conta
      </Button>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  }
})