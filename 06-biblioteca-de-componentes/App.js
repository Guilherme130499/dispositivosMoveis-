import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Divider, Button} from 'react-native-paper'

export default function App() {

{/*const lista = ["uva", "Maça", "Banana"]*/}


  return (
    <PaperProvider>      
      <View style={styles.container}>  
      <StatusBar style="auto" />


      

      {/* {
        lista.map(
          (fruta) => <Text>{fruta}</Text>
        )
      }

      <FlatList
        data={lista}
        renderItem={({ item }) => <Text>{ item }</Text>}
        />

      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
            <Divider />
        
        </View>
        )}
        /> */}


      {/* <Button mode='contained'>Clique aqui</Button>

      <Text>Uva</Text>
      <Divider></Divider>
      <Text>Uva</Text>
      <Divider />
      <Text>Uva</Text>
      <Divider />
      <Text>Uva</Text>
      <Divider />

        <Text variant='titleLarge' >Um texto qualquer</Text>
        <Text variant='headLineLarge' >Um texto qualquer</Text>
        <Text variant='displayLarge' >Um texto qualquer</Text>
        <Card>
            <Card.Content>
                <Title>O maior jogador de futebol da hitória</Title>
                <Paragraph>Neste card temos uma breve história do verdadeiro GOAT.Conhecido como Lionel Messi.</Paragraph>
                <Paragraph>La pulga como é conhecido desde novo</Paragraph>
            </Card.Content>
            <Card.Cover source={{ url:'https://f.i.uol.com.br/fotografia/2021/06/30/162508978660dce6fa8db97_1625089786_3x2_md.jpg'}}>

            </Card.Cover>
        </Card> */}


    </View>
    </PaperProvider>
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
