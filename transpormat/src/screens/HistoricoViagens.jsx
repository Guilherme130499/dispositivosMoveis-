import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph, Button, RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoricoViagens() {
  const [viagens, setViagens] = useState([]);//Cria um estado para armazenar a lista de todas as viagens carregadas.
  const [statusFiltro, setStatusFiltro] = useState('todos');//Estado para armazenar o filtro selecionado (por padrão, "todos").

  useEffect(() => {
    carregarViagens();
  }, []);

  const carregarViagens = async () => {//Função assíncrona para buscar as viagens armazenadas no AsyncStorage.
    try {
      const viagensJson = await AsyncStorage.getItem('viagens');//Tenta recuperar a string armazenada com a chave viagens.
      const todasViagens = viagensJson ? JSON.parse(viagensJson) : [];//Se houver dados, faz o parse de JSON para array; senão, inicializa como array vazio.
      setViagens(todasViagens);//atualiza o estado  
    } catch (error) {
      console.log('Erro ao carregar viagens:', error);
    }
  };

  const opcoesStatus = [//Array com opções do filtro de status que serão exibidas com botões de rádio.
    { label: 'Todos', value: 'todos' },
    { label: 'Pendente', value: 'pendente' },
    { label: 'Em andamento', value: 'em andamento' },
  ];

  const viagensFiltradas = statusFiltro === 'todos'//Filtra a lista com base no statusFiltro. Se for "todos", exibe tudo. Caso contrário, retorna apenas as viagens com status correspondente.
    ? viagens
    : viagens.filter(v => v.status === statusFiltro);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Histórico de Viagens</Title>

     { /*Componente que gerencia a seleção de um dos botões de rádio.*/}
      <RadioButton.Group
        onValueChange={value => setStatusFiltro(value)}
        value={statusFiltro}
      >
        <View style={styles.filtroContainer}> {/*Renderiza cada uma das opções de filtro usando map(). Cada item é composto por um botão de rádio e uma legenda.*/}
          {opcoesStatus.map(opcao => (
            <View key={opcao.value} style={styles.radioItem}>
              <RadioButton value={opcao.value} />
              <Text style={styles.radioLabel}>{opcao.label}</Text>
            </View>
          ))}
        </View>
      </RadioButton.Group>

      {viagensFiltradas.length === 0 ? ( //Se nenhuma viagem corresponder ao filtro, exibe mensagem de vazio.
        <Text style={styles.semViagens}>Nenhuma viagem encontrada para este filtro.</Text>
      ) : (
        viagensFiltradas.map(viagem => ( //Caso existam viagens, faz o map() em viagensFiltradas.
          <Card key={viagem.id} style={styles.card}>
            <Card.Content>
              <Title>{viagem.material}</Title>
              <Paragraph>Quantidade: {viagem.quantidade}</Paragraph>
              <Paragraph>Origem: {viagem.origem}</Paragraph>
              <Paragraph>Destino: {viagem.destino}</Paragraph>
              <Paragraph>Data desejada: {viagem.data}</Paragraph>
              <Paragraph>Status: {viagem.status}</Paragraph>
              {viagem.motorista && <Paragraph>Motorista: {viagem.motorista}</Paragraph>}
              <Paragraph>Solicitante: {viagem.nome}</Paragraph>
            </Card.Content>
          </Card>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    textAlign: 'center',
    marginBottom: 15,
  },
  filtroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    fontSize: 16,
  },
  card: {
    marginBottom: 15,
  },
  semViagens: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});
