import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View,TouchableOpacity} from 'react-native';
var createMathButton = (symbol) => {
  return (
  <TouchableOpacity
    style={{height: 80,width: 90,backgroundColor: 'powderblue',marginTop: 10,borderColor: 'grey',borderWidth: 1}}
    onPress={ () => {this.addToEquation(symbol)}}>
    <Text style={{textAlign: 'center', fontSize: 40, color : 'blue'}}>{symbol}</Text>
  </TouchableOpacity>
)
}
export default createMathButton