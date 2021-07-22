import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View,TouchableOpacity} from 'react-native';
var createNumberButton = (num) =>  {
  return (
    <TouchableOpacity
        style={{height: 80,width: 90,backgroundColor: 'powderblue',marginTop: 10,borderColor: 'grey',borderWidth: 1}}
        onPress={ () => {this.addToEquation(num)}}>
        <Text style={{textAlign: 'center', fontSize: 50}}>{num}</Text>
    </TouchableOpacity>
  )
}
export default createNumberButton