// LabelImageScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

export default function LabelImageScreen({ route }) {
  const { imageUri } = route.params;
  const [label, setLabel] = useState('');

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <TextInput 
        style={styles.input}
        onChangeText={setLabel}
        value={label}
        placeholder="Enter a label for the image"
      />
      <Button title="Submit" onPress={() => console.log('Submitted:', label, imageUri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
  },
});
