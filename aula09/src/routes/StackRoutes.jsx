import {createStackNavigator} from "@react-navigation/stack"
import ProfileScreen from '../screens/ProfileScreen'
import HomeScreen from "../screens/HomeScreen"
import ConfigScreen from "../screens/ConfigScreen"


const Stack = createStackNavigator()


export default function StackRoutes() {
  return (
            <Stack.Navigator>

                <Stack.Screen name="ListaScreen" component={ListaScreen}/>
                <Stack.Screen name="ItemScreen" component={ItemScreen}/>
                <Stack.Screen 
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title:"Inicio",
                        headerTitleAlign: "center",                        
                    }}/>


               
                <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
                <Stack.Screen name='configScreen' component={ConfigScreen} />
            </Stack.Navigator>
  )
}
