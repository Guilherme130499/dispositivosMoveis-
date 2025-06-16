import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';//Importando componente PieChart da biblioteca react-native-chart-kit, usada para exibir gráficos.

export default function Dashboard() {
  const data = [//Define os dados a serem exibidos no gráfico de pizza:
    {
      name: 'Pendentes',//nome da fatia
      population: 4,//valor numerico
      color: '#f39c12',//cor
      legendFontColor: '#7F7F7F',//estilo da legenda
      legendFontSize: 15,//estilo da legenda
    },
    {
      name: 'Em Andamento',
      population: 3,
      color: '#2980b9',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Concluídas',
      population: 5,
      color: '#27ae60',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Status das Viagens</Text>

      <PieChart //Cria o gráfico de pizza com os dados definidos. A largura do gráfico é 40 pixels menor que a largura da tela.
        data={data}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{//Configura o visual do gráfico:
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"//Define qual campo do objeto data representa o valor numérico da fatia (neste caso, population).
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
});
