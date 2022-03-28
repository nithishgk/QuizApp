import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Practice Exam</Text>
      <Button title="Java" onPress={() =>  navigation.navigate('java')}/>
      <Button title="Javascript" onPress={() =>  navigation.navigate('javascript')}/>
      <Button title="Python" onPress={() =>  navigation.navigate('python')}/>
      <Button title="C" onPress={() =>  navigation.navigate('c')}/>
    </View>
  );
}

function javaScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Java questions screen</Text>
    </View>
  )
} 

function javascriptScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>javascript questions screen</Text>
    </View>
  )
} 

function pythonScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>python questions screen</Text>
    </View>
  )
} 

function cScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>c questions screen</Text>
    </View>
  )
} 

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="java" component={javaScreen} />
        <Stack.Screen name="javascript" component={javascriptScreen} />
        <Stack.Screen name="python" component={pythonScreen} />
        <Stack.Screen name="c" component={cScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App