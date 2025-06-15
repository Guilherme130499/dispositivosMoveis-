//Importando tudo o que é necessário para criar as rotas e as telas do meu app.
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Veiculos from '../screens/Veiculos';
import Cadastro from '../screens/Cadastro';
import Login from '../screens/Login';
import Agendamentos from '../screens/Agendamentos';
import CadastroMotorista from '../screens/CadastroMotorista';
import CadastroUsuario from '../screens/CadastroUsuario'



//Tipos de navegação que posso usar
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


//Definindo qual a tela inicia meu app ao abrir
export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen // Definindo as telas do meu app
        name="Login" //Nome da rota
        component={Login} //Arquivo que será puxado para exibir 
        options={{ //Configura meu cabeçalho
          title: 'Login',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen //trazendo a tela Cadastro para dentro de stackRoutes
        name="Cadastro"
        component={Cadastro}
        options={{
          title: 'Cadastro',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen //trazendo a tela CadastroMotorista para dentro de stackRoutes
        name="CadastroMotorista"
        component={CadastroMotorista}
        options={{
          title: 'Cadastro de Motorista',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen
        name='CadastroUsuario'
        component={CadastroUsuario}
        options={{
          title: 'Cadastro de Usuário',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen //trazendo a tela Veiculos para dentro de stackRoutes
        name="Veiculos"
        component={Veiculos}
        options={{
          title: 'Veiculos',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen //trazendo a tela Agendamentos para dentro de stackRoutes
        name="Agendamentos"
        component={Agendamentos}
        options={{
          title: 'Tela de Agendamentos',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
