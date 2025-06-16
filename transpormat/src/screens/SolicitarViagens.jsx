import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SolicitarViagens() {
  const [nome, setNome] = useState('');
  const [material, setMaterial] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [data, setData] = useState('');

  const solicitarViagem = async () => {
    if (!nome || !material || !quantidade || !origem || !destino || !data) {
      alert('Preencha todos os campos');
      return;
    }

    const novaSolicitacao = {
      id: Date.now(), //cria um ID único para cada solicitação
      nome,
      material,
      quantidade,
      origem,
      destino,
      data,
      status: 'pendente'
    };

    try {
      const viagensExistentes = await AsyncStorage.getItem('viagens');
      const viagens = viagensExistentes ? JSON.parse(viagensExistentes) : [];

      viagens.push(novaSolicitacao);
      await AsyncStorage.setItem('viagens', JSON.stringify(viagens));

      alert('Solicitação registrada com sucesso!');
      setNome('');
      setMaterial('');
      setQuantidade('');
      setOrigem('');
      setDestino('');
      setData('');
    } catch (error) {
      alert('Erro ao salvar a solicitação');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Solicitar Transporte</Text>

      <TextInput 
      label="Seu nome" 
      value={nome} 
      onChangeText={setNome} 
      style={styles.input} 
      />

      <TextInput 
      label="Tipo de material" 
      value={material} 
      onChangeText={setMaterial} 
      style={styles.input} 
      />
      
      <TextInput 
      label="Quantidade" 
      value={quantidade} 
      onChangeText={setQuantidade} 
      style={styles.input} 
      keyboardType="numeric" 
      />
      
      <TextInput 
      label="Origem" 
      value={origem} 
      onChangeText={setOrigem} 
      style={styles.input} 
      />
      
      <TextInput 
      label="Destino" 
      value={destino} 
      onChangeText={setDestino} 
      style={styles.input} 
      />
      <TextInput 
      label="Data desejada" 
      value={data} 
      onChangeText={setData} 
      style={styles.input} 
      placeholder="DD/MM/AAAA" 
      />

      <Button mode="contained" onPress={solicitarViagem}>
        Solicitar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 20
  },
  input: {
    marginBottom: 10
  }
});

