//IMPORTANDO FUNÇÕES/PADRÕES DA BIBLIOTECA REACT-NATIVE
import { StyleSheet, Text, View } from 'react-native';
//IMPORTANDO REACT
import React from 'react';
//IMPORTANDO UM COMPONENTE QUE ESTÁ DENTRO DO PROJETO
import Title from './src/components/Title';

import Main from './src/components/Main';

export default function App() {
  return (
    //VIEW define que precisa usar/mostrar um espaço na tela
    <View style={styles.container}>
      <Title />     
      <Main /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
