import React from 'react' //importando o React
import { StyleSheet, Text, View } from 'react-native' //importando componentes do React-native
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' //importando o criador de navegação da biblioteca
import RealizarViagens from '../screens/RealizarViagens'//importando tela
import SolicitarViagens from '../screens/SolicitarViagens'//importando tela
import HistoricoViagens from '../screens/HistoricoViagens'//importando tela
import Dashboard from '../screens/Dashboards' //importando tela

const Tab = createBottomTabNavigator()//criando um objeto Tab para montar a navegação com Tab.Navigator e Tab.Screen.

function AgendamentoTabs() {//Criando um componente que define as abas visíveis para o usuário.
  return (
    //navegação por abas
    <Tab.Navigator>
      <Tab.Screen //primeira tela/aba
        name='SolicitarViagens' 
        component={SolicitarViagens}
        options={{ title: 'Solicitar' }}        
      />
      <Tab.Screen //segunda tela/aba
        name='RealizarViagens' 
        component={RealizarViagens}
        options={{ title: 'Realizar' }} 
      />
      <Tab.Screen //terceira tela/aba
        name='HistoricoViagens'
        component={HistoricoViagens}
        options={{ title: 'Histórico' }}
      />
      <Tab.Screen //quarta tela/aba
        name='Dashboard'
        component={Dashboard}
        options={{ title: 'Dashboard' }} 
      />
    </Tab.Navigator>
  )
}

export default function Agendamentos() { //Criando componente principal chamado Agendamentos, que será renderizado em alguma do seu app.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo à tela de Agendamentos</Text>
      <AgendamentoTabs />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  }
})
