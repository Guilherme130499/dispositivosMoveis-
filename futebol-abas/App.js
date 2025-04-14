import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider} from 'react-native-paper'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import EscudoScreen from './screens/EscudoScreen';
import {Ionicons} from '@expo/vector-icons'
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
   <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
          name='EscudoScreen' 
          component={EscudoScreen}
          options={{
            title: 'Escudo',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'red'
            },
            tabBarInactiveBackgroundColor: 'Black',
            tabBarActiveTintColor: 'red',
            tabBarIcon: ({ color, size}) => <Ionicons name= 'shield' color={color} size={size} />
            
          }}
          />

          <Tab.Screen
                    name='JogadoresScreen' 
                    component={JogadoresScreen}
                    options={{
                      title: 'Jogadores',
                      headerTitleAlign: 'center',
                      headerStyle: {
                        backgroundColor: 'red'
                      },
                      tabBarInactiveBackgroundColor: 'Black',
                      tabBarActiveTintColor: 'red',
                      tabBarIcon: ({ color, size}) => <Ionicons name= 'football' color={color} size={size} />
                      
                    }}
                    />
          
          <Tab.Screen
                    name='TitulosScreen' 
                    component={TitulosScreen}
                    options={{
                      title: 'Titulos',
                      headerTitleAlign: 'center',
                      headerStyle: {
                        backgroundColor: 'red'
                      },
                      tabBarInactiveBackgroundColor: 'Black',
                      tabBarActiveTintColor: 'red',
                      tabBarIcon: ({ color, size}) => <Ionicons name= 'trophy-sharp' color={color} size={size} />
                      
                    }}
                    />

        </Tab.Navigator>
      </NavigationContainer>
   </PaperProvider>
  );
}

{/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/}
