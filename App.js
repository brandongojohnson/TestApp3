// App.js
import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Test } from './Test';
import { exportTest } from './Test';
import { promiseTest } from './Test';
import { readUserData } from './Test';
import { outerTest } from './Test';

const App = () => {

  const hello = [1, 23, 5, 6, 6, 5]

  

  const artist = () => {
    return (
      <View style={{ width: "33%", backgroundColor: "yellow" }}>
        <View style={styles.tile}></View>
        <View style={{ width: "100%", height: 30, backgroundColor: "red" }}>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    )
  }
  const testing2 = async () =>{
    const test = await promiseTest();
    console.log(test)
  }

  const asyncWrap = () =>{
    testing2()
    console.log("This should be printed first")
  }

  var ball = "nuts"

  useEffect(()=>{
    // readUserData()
    // ball = readUserData()
  },[])

  const testBall = () =>{
    ball = readUserData()
    console.log(ball)
  }

  const testing = () => {
    return (
      <View style={{ margin: 10 }} >
        <View style={{ height: 141, width: 250, backgroundColor: "red", borderRadius: 10 }}></View>
        <View>
          <Text>Rules</Text>
          <Text>Doja Cat</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <Button title="this is a tests" onPress={()=>outerTest()}/>
      <ScrollView horizontal>
        {
          hello.map((hi, index) => (
            testing()
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    width: '100%',
    height: 100,
    backgroundColor: "pink"
  }
})
export default App

