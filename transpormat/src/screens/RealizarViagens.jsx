import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Alert, Text } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RealizarViagens() {
  const [viagens, setViagens] = useState([]);
  const [motoristaEmail, setMotoristaEmail] = useState('');
  const [ehMotorista, setEhMotorista] = useState(false);

  useEffect(() => {
    const verificarMotoristaECarregar = async () => {
      try {
        const logado = await AsyncStorage.getItem('usuarioLogado');
        const motoristasSalvos = await AsyncStorage.getItem('motoristas');

        if (logado) {
          const usuario = JSON.parse(logado);
          setMotoristaEmail(usuario.email);

          if (motoristasSalvos) {
            const motoristas = JSON.parse(motoristasSalvos);
            // Verifica se o usuário logado está na lista de motoristas
            const motoristaExiste = motoristas.some(m => m.email.toLowerCase() === usuario.email.toLowerCase());
            setEhMotorista(motoristaExiste);
          } else {
            setEhMotorista(false);
          }
        } else {
          setEhMotorista(false);
        }

        await buscarViagensPendentes(); // carrega as viagens pendentes
      } catch (error) {
        console.log('Erro ao verificar motorista ou carregar viagens', error);
      }
    };

    verificarMotoristaECarregar();
  }, []);

  const buscarViagensPendentes = async () => {
    try {
      const viagensJson = await AsyncStorage.getItem('viagens');
      const todasViagens = viagensJson ? JSON.parse(viagensJson) : [];
      const pendentes = todasViagens.filter(v => v.status === 'pendente');
      setViagens(pendentes);
    } catch (error) {
      console.log('Erro ao buscar viagens', error);
    }
  };

  const assumirViagem = async (id) => {
    if (!ehMotorista) {
      Alert.alert('Acesso negado', 'Somente motoristas cadastrados podem assumir viagens.');
      return;
    }

    try {
      const viagensJson = await AsyncStorage.getItem('viagens');
      let todasViagens = viagensJson ? JSON.parse(viagensJson) : [];

      const index = todasViagens.findIndex(v => v.id === id);
      if (index === -1) return;

      todasViagens[index].status = 'em andamento';
      todasViagens[index].motorista = motoristaEmail;

      await AsyncStorage.setItem('viagens', JSON.stringify(todasViagens));
      Alert.alert('Sucesso', 'Você assumiu a viagem!');
      buscarViagensPendentes();
    } catch (error) {
      Alert.alert('Erro', 'Falha ao assumir viagem');
      console.log(error);
    }
  };

  if (viagens.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Nenhuma viagem pendente no momento.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {viagens.map(viagem => (
        <Card key={viagem.id} style={styles.card}>
          <Card.Content>
            <Title>{viagem.material}</Title>
            <Paragraph>Quantidade: {viagem.quantidade}</Paragraph>
            <Paragraph>Origem: {viagem.origem}</Paragraph>
            <Paragraph>Destino: {viagem.destino}</Paragraph>
            <Paragraph>Data desejada: {viagem.data}</Paragraph>
            <Paragraph>Solicitante: {viagem.nome}</Paragraph>
          </Card.Content>
          <Card.Actions>
            {ehMotorista ? (
              <Button mode="contained" onPress={() => assumirViagem(viagem.id)}>
                Assumir Viagem
              </Button>
            ) : (
              <Button mode="contained" disabled>
                Somente motoristas podem assumir
              </Button>
            )}
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  card: {
    marginBottom: 15,
  },
});
