import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const nome = "Guilherme"

  function alerta () {
    alert('Clicou')
  }
 
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Image 
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTil53XLcrn5gu72OoNpHRz-_vMgSBzKoyyQ&s'
        }}
          style={{
            height:300,
            width:300
          }}
        />
        <Text>CJ REBAIXADO</Text>
      <Button title='Aqui' onPress={alerta}></Button>
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
