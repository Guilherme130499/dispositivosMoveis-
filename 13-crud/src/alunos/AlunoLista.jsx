import { StyleSheet, Text, View, Card } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'
import AlunosForm from './AlunosForm'
import { FlatList } from 'react-native'

export default function AlunoLista({ navigation, route}) {

    const [alunos, setAlunos] = useState([
        {
            id: '1',
            nome:"Teste",
            cpf: "02310039182",
            email: "teste@gmail.com",
            dataNascimento: "02/01/2020",
            telefone: "(61) 998989898"
        }
    ])
  return (
    <View>
      <Button 
      style={{ marginTop: 10}}
      icon='plus'
      mode='contained'
      onPress={() => navigation.navigate(AlunosForm)}
      >
        Cadastrar
      </Button>
      <FlatList 
        data={alunos}
        renderItem={({ item }) => (
            <Card>
                <Card.Content>

                </Card.Content>
            </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})