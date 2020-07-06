import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native';

export default function App() {

  console.log('Hello Console World!!');

  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);

  const pressHandler = () => {
    setTodos([textInput, ...todos]);
  };

  const typingHandler = (value) => {
    setTextInput(value);
  }

  return (
    <View style={styles.container}>
      <Text style = {{color: '#eeeeee', fontSize: 50}}>
        To-Do List</Text>
      <TextInput 
        onChangeText = {typingHandler}
        value = {textInput}
        style = {{borderWidth: 2, width: 300, borderColor: '#eeeeee', color: '#eeeeee'}}
      />
      <Button 
        style = {{borderColor: '#eeeeee'}}
        title='Add to list' icon = {{ name: 'code'}}
        onPress = {pressHandler} 
      />
      <FlatList
        style = {{color: '#eeeeee'}}
        data = {todos}
        renderItem = {todo => <Todo text = {todo.item}/>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Todo = props => (
  <View
    style = {{ backgroundColor: "#000000", width: 300, margin: 5, color: '#eeeeee'}}>
    <Text style = {{color: '#eeeeee', fontSize: 20}}> {props.text}</Text>  
    </View>
);
