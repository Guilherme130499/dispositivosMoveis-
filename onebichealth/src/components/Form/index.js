import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura');

  function calcularImc() {
    if (peso !== '' && altura !== '') {
      const resultado = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2);
      setImc(resultado);
      setMessageImc('Seu IMC é:');
    } else {
      setImc(null);
      setMessageImc('Preencha peso e altura corretamente');
    }
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <Text>Peso</Text>
        <TextInput
          placeholder="Ex. 75.365"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <Button title="Calcular IMC" onPress={calcularImc} />
      </View>

      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}

