import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function App() {

  function alerta () {
    alert('Gol do malvadão')
  }

  return (
    <ScrollView>
      <View style={styles.container}>      
      <Text style={{fontSize:50, fontStyle: 'italic'}}>Everton Araujo</Text>
      <Image 
        source={{
          uri: 'https://flamengorj.com.br/wp-content/uploads/2024/09/evertton-araujo-lidera-fundamento-crucial-em-jogo-do-flamengo.jpg'
        }}
          style={{
            height:200,
            width:200
          }}
        />      
        <Text style={{fontSize:20, fontStyle: 'italic'}}>Campeão carioca 2025</Text>
        <Text style={{fontSize:20, fontStyle: 'italic'}}>Campeão da libertadores sub-20 de 2025</Text>
        <Text style={{fontSize:20, fontStyle: 'italic'}}>Maior promessa jogando na posição de volante desde João Gomes</Text>
      <Text style={{fontSize:30, fontStyle: 'italic'}}>Arrascaeta</Text>
      <Image 
        source={{
          uri: 'https://th.bing.com/th/id/OIP.oXiopFFq-MdDB8L8TSEMWgHaE8?rs=1&pid=ImgDetMain'
        }}
          style={{
            height:200,
            width:200
          }}
        />
          <Text style={{fontSize:20, fontStyle: 'italic'}}>Campeão carioca 2025</Text>
          <Text style={{fontSize:20, fontStyle: 'italic'}}>Ao lado de BH, é o jogador com mais títulos da história do flamengo, ultrapassando Zico</Text>
      <Text style={{fontSize:80, fontStyle: 'italic'}}>Gerson</Text>
      <Image 
        source={{
          uri: 'https://colunadofla.com/wp-content/uploads/2024/08/gerson-flamengo-860x484.jpg'
        }}
          style={{
            height:200,
            width:200
          }}
          />
          
          <Text style={{fontSize:20, fontStyle: 'italic'}}>Líder em desarmes na temporada 2019</Text>
          <Text style={{fontSize:20, fontStyle: 'italic'}}>Campeão carioca 2025</Text>
      <Text style={{fontSize:30, fontStyle: 'italic'}}>Léo Ortiz</Text>
      <Image 
        source={{
          uri: 'https://th.bing.com/th?id=OIF.UKKLYieKRmo%2b4feVccejIw&rs=1&pid=ImgDetMain'
        }}
          style={{
            height:200,
            width:200
          }}
        />
        <Text style={{fontSize:20, fontStyle: 'italic'}}>Campeão carioca 2025</Text>
        <Text style={{fontSize:20, fontStyle: 'italic'}}>0 Derrotas com a camisa do flamengo</Text>
      <Text style={{fontSize:100, fontStyle: 'italic'}}>GOAT</Text>
      <Image 
        source={{
          uri: 'https://th.bing.com/th/id/OIP.rkmeMghi79934JtvM8Z8QgHaE7?rs=1&pid=ImgDetMain'
        }}
          style={{
            height:200,
            width:200
          }}
        />
        <Text style={{fontSize:20, fontStyle: 'italic'}}>Mais participações em gols da história</Text>
        <Text style={{fontSize:20, fontStyle: 'italic'}}>Maior assistente da história</Text>
        <Text style={{fontSize:20, fontStyle: 'italic'}}>Jogador com mais títulos da história</Text>
        <Button title='GOL' onPress={alerta}></Button>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
