import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { Text, TextInput, Button, Card, Title } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';// Importando um componente que permite aplicar máscaras nos campos (como CPF e telefone).
import AsyncStorage from '@react-native-async-storage/async-storage';//Importando a biblioteca usada para armazenamento local de dados (como um pequeno banco de dados no celular).

export default function CadastroMotorista() {
  const [motoristas, setMotoristas] = useState([]);

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    carregarMotoristas();
  }, []);

  async function carregarMotoristas() {
    try {
      const data = await AsyncStorage.getItem('motoristas');//Tenta buscar os dados salvos com a chave "motoristas".
      const lista = data ? JSON.parse(data) : [];// Se encontrar dados, converte de JSON para array. Caso contrário, retorna array vazio.
      setMotoristas(lista);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os motoristas');//Atualiza o estado com a lista carregada. Se der erro, exibe um alerta.
    }
  }

  async function salvarMotoristas(listaAtualizada) {//Salva uma nova lista de motoristas no armazenamento.
    try {
      await AsyncStorage.setItem('motoristas', JSON.stringify(listaAtualizada));
      setMotoristas(listaAtualizada);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os motoristas');// Converte a lista para JSON e salva. Se falhar, mostra alerta.
    }//
  }

  const salvarMotorista = async () => {
    if (!nome || !cpf || !telefone || !email || !senha) {//Se algum campo estiver vazio, exibe alerta e para a execução.
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    if (editandoId !== null) {//Verifica se está editando um motorista.
      const listaAtualizada = motoristas.map(m =>//Atualiza os dados do motorista com base no id.
        m.id === editandoId
          ? { id: editandoId, nome, cpf, telefone, email, senha, datanascimento }
          : m
      );
      await salvarMotoristas(listaAtualizada);//Salva, mostra alerta de sucesso e limpa o formulário.
      Alert.alert('Sucesso', 'Motorista atualizado com sucesso!');
      limparFormulario();
      return;
    }

    const emailExiste = motoristas.some(m => m.email === email);//Garante que não tenha duplicidade de email.
    if (emailExiste) {
      Alert.alert('Erro', 'Este email já está cadastrado');
      return;
    }

    const novoMotorista = {// Cria um novo objeto motorista, com id baseado no timestamp atual.
      id: Date.now().toString(),
      nome,
      cpf,
      telefone,
      email,
      senha,
      datanascimento,
    };

    const listaAtualizada = [...motoristas, novoMotorista];//Adiciona à lista, salva, mostra sucesso e limpa formulário.
    await salvarMotoristas(listaAtualizada);
    Alert.alert('Sucesso', `Motorista ${nome} cadastrado!`);
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

  const carregarParaEdicao = (motorista) => {//Ao clicar num item da lista, essa função carrega os dados no formulário.
    setNome(motorista.nome);
    setCpf(motorista.cpf);
    setTelefone(motorista.telefone);
    setEmail(motorista.email);
    setSenha(motorista.senha);
    setDatanascimento(motorista.datanascimento);
    setEditandoId(motorista.id);
  };

  const excluirMotorista = () => {// Exibe alerta pedindo confirmação da exclusão.
    Alert.alert(
      'Confirmar exclusão',
      `Deseja excluir o motorista ${nome}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            const listaAtualizada = motoristas.filter(m => m.id !== editandoId);// Se o usuário confirmar, remove o motorista da lista e salva.
            await salvarMotoristas(listaAtualizada);
            Alert.alert('Sucesso', 'Motorista excluído');
            limparFormulario();
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Cadastro de Motorista</Title>

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
        <Button mode="contained" onPress={salvarMotorista}>
          {editandoId ? 'Atualizar' : 'Cadastrar'}
        </Button>

        {editandoId && (
          <Button mode="outlined" onPress={excluirMotorista} color="red">
            Excluir
          </Button>
        )}

        <Button mode="text" onPress={limparFormulario}>
          Limpar
        </Button>
      </View>

      <Title style={{ marginTop: 15 }}>Motoristas cadastrados:</Title>

      {motoristas.length === 0 ? (
        <Text>Nenhum motorista cadastrado.</Text>
      ) : (
        <FlatList//exibe a lista de motoristas com FlatList, onde cada item é um Card clicável.
          data={motoristas}
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
