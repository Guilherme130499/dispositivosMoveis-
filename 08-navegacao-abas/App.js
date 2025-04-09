import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import { PaperProvider} from 'react-native-paper'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import {Ionicons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
   <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          {/* HomeScreen*/}
          <Tab.Screen 
          name='HomeScreen' 
          component={HomeScreen}
          options={{
            title: 'Início',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'red'
            },
            tabBarInactiveBackgroundColor: 'Black',
            tabBarActiveTintColor: 'red',
            tabBarIcon: ({ color, size}) => <Ionicons name= 'home' color={color} size={size} />
            
          }}
          />

          <Tab.Screen  
          name='ProfileScreen' 
          component={ProfileScreen} 
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size}) => <Ionicons name= 'person' color={color} size={size} />
          }}
          />

          <Tab.Screen 
          name='SettingsScreen' 
          component={SettingsScreen} 
          options={{
            title: 'Configurações',
            tabBarIcon: ({ color, size}) => <Ionicons name= 'cog' color={color} size={size} />
          }}
          />

        </Tab.Navigator>
      </NavigationContainer>
   </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  }
})


