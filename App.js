import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState('');
  const clickHandler = () => {
    setName('chun-li');
  }
  const [person, setPerson] = useState([
    { name: 'mario', age: 40, id: '1' },
    { name: 'luigi', age: 35, id: '2' },
    { name: 'peach', age: 30, id: '3' },
    { name: 'yoshi', age: 25, id: '4' },
    { name: 'toad', age: 28, id: '5' },
    { name: 'bowser', age: 50, id: '6' },
  ]);

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bold}>Hello World!</Text>
        <Text style={styles.bold}>My name is {name}</Text>
        <Text></Text>
        <View style={styles.buttonContainer}>
          <Button title="update name" onPress={clickHandler} />
        </View>
        <Text>Enter name:</Text>
        <TextInput
          style={[styles.input, styles.bold]}
          placeholder='e.g. John Doe'
          onChangeText={(val) => setName(val)}
        />
        <Text>Enter age:</Text>
        <TextInput
          keyboardType='numeric'
          style={[styles.input, styles.bold]}
          placeholder='e.g. 90'
          onChangeText={(val) => setAge(val)}
        />
        <Text style={styles.bold}>name: {name} age: {age}</Text>
      </View>
      <View></View>
      <View style={styles.body}>
        <Text style={styles.bold}>Hhqgwevbuwv</Text>
        <Text>nwjnfwjbjfbjfbfwbjjfbjv</Text>
        <Text>FRDTYDYUFYFY</Text>
      </View>
    </View>
    // <View style={styles.container}>
    //   <ScrollView>
    //     {person.map((item) => {
    //       return (
    //         <View id={item.id}>
    //           <Text style={styles.item}>{item.name}</Text>
    //         </View>

    //       )
    //     })}
    //   </ScrollView> 
    // </View>
    // <View style={styles.container}>

    //   <FlatList
    //     numColumns={2}
    //     keyExtractor={(item) => item.id}
    //     data={person}
    //     renderItem={({ item }) => (
    //       <TouchableOpacity onPress={() => PressHandler(item.id)}>
    //         <Text style={styles.item}>{item.name}</Text>
    //       </TouchableOpacity>
    //     )}
    //   />

    // </View>
  )


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});



