import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Text, TextInput, Button } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroUsuario() {
  const navigation = useNavigation();

  console.log(' CadastroUsuario carregada');

  const [nome, setNome] = useState(''); //Armazenando o que for digitado para salver e atualizar seu estado
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [datanascimento, setDatanascimento] = useState('');


  const camposCadastrar = async () => {
      console.log('Cadastro em andamento...');
      
    if (!nome || !cpf || !telefone || !email ||!senha) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const usuarioSalvo = await AsyncStorage.getItem('usuario');
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);
      if (usuario.email === email) {
        alert('Este email já está cadastrado.');
        return;
      }
    }

    const usuario = {
      nome,
      cpf,
      telefone,
      email,
      senha,
      datanascimento,
      cnh,
    };
    try {
      await AsyncStorage.setItem('usuario', JSON.stringify(usuario));

    alert(`Usuário ${nome} cadastrado com sucesso!`);//Estando todos os campos cadastrados emite alerta de sucesso
    setNome('');//Atualiza o estado do campo para vazio após o sucesso do cadastro para que seja feito um novo cadastro 
    setCpf('');
    setTelefone('');
    setEmail('');
    setSenha('');
    setDatanascimento('');
  }catch (error) {
      alert('Erro ao salvar os dados')
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput
        label="Nome Completo"
        placeholder='Informe o nome completo'
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="CPF"
        placeholder='Informe o CPF'
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        keyboardType="numeric"
        mode="outlined"
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cpf'}
          />
        )}
      />

      <TextInput
        label="Telefone"
        placeholder='Informe o Telefone'
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
        keyboardType="phone-pad"
        mode="outlined"
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
          />
        )}
      />

      <TextInput
        label="Email"
        placeholder='Informe o E-mail'
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        mode="outlined"
        autoCapitalize='none'
      />

      <TextInput
        label="Data de Nascimento"
        placeholder='Informe a Data'
        value={datanascimento}
        onChangeText={setDatanascimento}
        style={styles.input}
        keyboardType="numeric"
        mode="outlined"
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
          />
        )}
      />

      <Button 
        mode='contained'
        onPress={camposCadastrar}
      >
        Cadastrar
      </Button>

    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
  },
  input: {
    marginBottom: 9,
  }
})