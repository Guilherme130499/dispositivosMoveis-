import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { Text, TextInput, Button, Card, Title } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroUsuario() {
  const [usuarios, setUsuarios] = useState([]);

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function carregarUsuarios() {
    try {
      const data = await AsyncStorage.getItem('usuarios');
      const lista = data ? JSON.parse(data) : [];
      setUsuarios(lista);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os usuários');
    }
  }

  async function salvarUsuarios(listaAtualizada) {
    try {
      await AsyncStorage.setItem('usuarios', JSON.stringify(listaAtualizada));
      setUsuarios(listaAtualizada);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os usuários');
    }
  }

  const salvarUsuario = async () => {
    if (!nome || !cpf || !telefone || !email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    if (editandoId !== null) {
      const listaAtualizada = usuarios.map(u =>
        u.id === editandoId
          ? { id: editandoId, nome, cpf, telefone, email, senha, datanascimento }
          : u
      );
      await salvarUsuarios(listaAtualizada);
      Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
      limparFormulario();
      return;
    }

    const emailExiste = usuarios.some(u => u.email === email);
    if (emailExiste) {
      Alert.alert('Erro', 'Este email já está cadastrado');
      return;
    }

    const novoUsuario = {
      id: Date.now().toString(),
      nome,
      cpf,
      telefone,
      email,
      senha,
      datanascimento,
    };

    const listaAtualizada = [...usuarios, novoUsuario];
    await salvarUsuarios(listaAtualizada);
    Alert.alert('Sucesso', `Usuário ${nome} cadastrado!`);
    limparFormulario();
  };

  const limparFormulario = () => {
    setNome('');
    setCpf('');
    setTelefone('');
    setEmail('');
    setSenha('');
    setDatanascimento('');
    setEditandoId(null);
  };

  const carregarParaEdicao = (usuario) => {
    setNome(usuario.nome);
    setCpf(usuario.cpf);
    setTelefone(usuario.telefone);
    setEmail(usuario.email);
    setSenha(usuario.senha);
    setDatanascimento(usuario.datanascimento);
    setEditandoId(usuario.id);
  };

  const excluirUsuario = () => {
    Alert.alert(
      'Confirmar exclusão',
      `Deseja excluir o usuário ${nome}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            const listaAtualizada = usuarios.filter(u => u.id !== editandoId);
            await salvarUsuarios(listaAtualizada);
            Alert.alert('Sucesso', 'Usuário excluído');
            limparFormulario();
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Cadastro de Usuário</Title>

      <TextInput
        label="Nome Completo"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        keyboardType="numeric"
        mode="outlined"
        render={(props) => <TextInputMask {...props} type={'cpf'} />}
      />

      <TextInput
        label="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
        keyboardType="phone-pad"
        mode="outlined"
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cel-phone'}
            options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }}
          />
        )}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        mode="outlined"
        autoCapitalize="none"
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        mode="outlined"
        secureTextEntry
      />

      <TextInput
        label="Data de Nascimento"
        value={datanascimento}
        onChangeText={setDatanascimento}
        style={styles.input}
        keyboardType="numeric"
        mode="outlined"
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{ format: 'DD/MM/YYYY' }}
          />
        )}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
        <Button mode="contained" onPress={salvarUsuario}>
          {editandoId ? 'Atualizar' : 'Cadastrar'}
        </Button>

        {editandoId && (
          <Button mode="outlined" onPress={excluirUsuario} color="red">
            Excluir
          </Button>
        )}

        <Button mode="text" onPress={limparFormulario}>
          Limpar
        </Button>
      </View>

      <Title style={{ marginTop: 15 }}>Usuários cadastrados:</Title>

      {usuarios.length === 0 ? (
        <Text>Nenhum usuário cadastrado.</Text>
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card} onPress={() => carregarParaEdicao(item)}>
              <Card.Content>
                <Title>{item.nome}</Title>
                <Text>Email: {item.email}</Text>
                <Text>Telefone: {item.telefone}</Text>
              </Card.Content>
            </Card>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  card: {
    marginBottom: 8,
  },
});
