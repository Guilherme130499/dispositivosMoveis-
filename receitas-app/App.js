import { PaperProvider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./screens/HomeScreen";


export default function App() {
  
  const Stack = createStackNavigator()
  
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        </Stack.Navigator> 
      </NavigationContainer>
    </PaperProvider>
  );
}

