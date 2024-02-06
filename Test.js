import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { ref, set, onValue } from "firebase/database";
import { db } from './firebase';

export const Test = () => {
    var data = null;

    function readUserData() {
        onValue(ref(db), (snapshot) => {
            data = snapshot.val();
        })
    }

    const testRead = async () => {
        const stuff = await promiseTest()
        console.log(stuff)
    }

    testRead()
    console.log("line after setTimeout from outside")
}

export function readUserData() {
    var data = null
    onValue(ref(db), (snapshot) => {
        data = snapshot.val();
        console.log("inside")
    })
    return data
}

export const promiseData = () =>{
    return new Promise((resolve,reject)=>{
        onValue(ref(db), (snapshot) => {
            data = snapshot.val();
            resolve(data)
        },(error)=>reject(error))
    })
}

const test7 = async () =>{
    const hat = await promiseData()
    
}




export const promiseTest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Times up"), 3000)
    })
}

const noPromise = () =>{
    setTimeout(()=>console.log("No Promise!"),2000)
    console.log("after noPromise call")
}

// const test3 = async () =>{
//     const name = await promiseTest()
//     console.log(name)
//     console.log("After name")
// }

const test3 = () =>{
    noPromise()
}

export const outerTest = () =>{
    test3()
    console.log("This should print first")
}

export const exportTest = () => {
    console.log("this is another test")
}



