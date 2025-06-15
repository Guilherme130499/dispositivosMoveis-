import { StyleSheet, View } from 'react-native' //Importando componentes do react-native
import React, { useState } from 'react' //Importando o react e o hook usestate do react (usestate armazena e gerencia o estado dos campos)
import { Text, TextInput, Button } from 'react-native-paper' //importando componentes do react-native-paper
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroMotorista() {
  const navigation = useNavigation();

  const [nome, setNome] = useState(''); //Armazenando o que for digitado para salver e atualizar seu estado
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [cnh, setCnh] = useState('');

  const camposCadastrar = async () => { //Validando os campos e salvando as respostas

    if (!nome || !cpf || !telefone || !email || !senha || !cnh) {//Lógica que valida se nenhum campo ficou vazio, junto com alerta caso tenha ficado
      alert('Por favor, preencha todos os campos');
      return;
    }

    const motoristaSalvo = await AsyncStorage.getItem('motorista');
    if (motoristaSalvo) {
      const motorista = JSON.parse(motoristaSalvo);
      if (motorista.email === email) {
        alert('Este email já está cadastrado.');
        return;
      }
    }

    const motorista = {
      nome,
      cpf,
      telefone,
      email,
      senha,
      datanascimento,
      cnh,
    };
    try {
      await AsyncStorage.setItem('motorista', JSON.stringify(motorista));
      
    alert(`Motorista ${nome} cadastrado com sucesso!`);//Estando todos os campos cadastrados emite alerta de sucesso
    setNome('');//Atualiza o estado do campo para vazio após o sucesso do cadastro para que seja feito um novo cadastro 
    setCpf('');
    setTelefone('');
    setEmail('');
    setSenha('');
    setDatanascimento('');
    setCnh('');
    } catch (error) {
      alert('Erro ao salvar os dados')
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Motorista</Text>

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
        label="Senha"
        placeholder='Informe a senha'
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        mode="outlined"
        secureTextEntry
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

      <TextInput
        label="Número da CNH"
        placeholder='Informe o número da CNH'
        value={cnh}
        onChangeText={setCnh}
        style={styles.input}
        keyboardType="numeric"
        mode="outlined"
      />

      <Button style={StyleSheet.Button}
        mode="contained"
        onPress={camposCadastrar}
      >
        Cadastrar
      </Button>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',

  },
  title: {
    textAlign: 'center',
  },
  input: {
    marginBottom: 9,
  }

})
