import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

export default function AlunosForm() {

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")

    function salvar() {
        let aluno = {
            nome, 
            cpf,
            email,
            telefone,
            dataNascimento
        }

        if (!aluno.nome || !aluno.cpf || !aluno.email || !aluno.telefone || !aluno.dataNascimento) {
            alert("Preencha todos os campos!")
        } else { }
    }

    return (
        <View style={styles.container}>

            <Text variant='titleLarge'>Informe os dados do aluno</Text>

            <TextInput
                style={styles.input}
                mode='outlined'
                label="Nome"
                placeholder='Informe o nome'
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                mode='outlined'
                label="CPF"
                placeholder='Informe o CPF'
                value={cpf}
                onChangeText={setCpf}
            />

            <TextInput
                style={styles.input}
                mode='outlined'
                label="Email"
                placeholder='Informe o e-mail'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                mode='outlined'
                label="Telefone"
                placeholder='Informe o telefone'
                value={telefone}
                onChangeText={setTelefone}
            />

            <TextInput
                style={styles.input}
                mode='outlined'
                label="Data de nascimento"
                placeholder='Informe a data de nascimento'
                value={dataNascimento}
                onChangeText={setDataNascimento}
            />

            <Button
                style={styles.input}
                mode='contained'
                onPress={salvar}
            >
                salvar
            </Button>

        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10
    },
    input: {
        width: '90%',
        marginTop: 10
    }
})