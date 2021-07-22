import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, View,TouchableOpacity} from 'react-native';
import calculate from './calcAlgo.js'

const Separator = () => (
  <View style={styles.separator} />
);

class App extends Component {

  constructor(props) {
    super(props);
    this.addToEquation = this.addToEquation.bind(this);
    this.utilityOperation = this.utilityOperation.bind(this)
    this.solveEquation = this.solveEquation.bind(this)

    this.state = {
      equation: '',
      multAndDiv: false
    }
  }

  createNumberButton(num) {
    return (
      <TouchableOpacity
          style={{height: 80,width: 90,backgroundColor: 'powderblue',marginTop: 10,borderColor: 'grey',borderWidth: 1}}
          onPress={ () => {this.addToEquation(num)}}>
          <Text style={{textAlign: 'center', fontSize: 50}}>{num}</Text>
      </TouchableOpacity>
    )
  }
  createMathButton(symbol) {
    return (
    <TouchableOpacity
      style={{height: 80,width: 90,backgroundColor: 'powderblue',marginTop: 10,borderColor: 'grey',borderWidth: 1}}
      onPress={ () => {this.addToEquation(symbol)}}>
      <Text style={{textAlign: 'center', fontSize: 40, color : 'blue'}}>{symbol}</Text>
    </TouchableOpacity>
  )
  }

  createEqualButton() {
    return (
    <TouchableOpacity
    style={{height: 80,width: 90,backgroundColor: 'powderblue',marginTop: 10,borderColor: 'grey',borderWidth: 1}}
    onPress={ () => {this.solveEquation()}}>
    <Text style={{textAlign: 'center', fontSize: 40, color : 'blue'}}>=</Text>
  </TouchableOpacity>
  )
  }

  createUtilityButton(symbol) {
    return (
      <TouchableOpacity
      style={{height: 80,width: 135,backgroundColor: 'powderblue',marginTop: 10,borderColor: 'grey',borderWidth: 1}}
      onPress={ () => {this.utilityOperation(symbol)}}>
      <Text style={{textAlign: 'center', fontSize: 40}}>{symbol}</Text>
    </TouchableOpacity>
    )
  }
  createNumberView() {
    return (
      <View style={{height: 80,width: 360,backgroundColor: 'powderblue'}}>
        <Text style={{
          backgroundColor: 'powderblue',
          fontSize: 40,
          textAlign: 'center',
        }}>
          {this.state.equation}
        </Text>
      </View>
    )
  }

  addToEquation(symbol) {
    this.setState({equation: this.state.equation + symbol})

    if (symbol === '÷') {
      this.setState({multAndDiv: true})
      console.log('division')
    }
    if (symbol === 'x') {
      this.setState({multAndDiv: true})
      console.log('multiplication')
    }
    if (symbol === '-') {
      console.log('subtraction')
    }
    if (symbol === '+') {
      console.log('addition')
    }

  }

  utilityOperation(utility) {
    if (utility === 'clear') {
      this.setState({equation: ''})
    } else if (utility === 'delete') {
      this.setState({equation: this.state.equation.slice(0,this.state.equation.length -1)})
    }
  }

  equalButtonFunction(string) {
  console.log('string -> ', string)

  }

  solveEquation() {
    var equation = this.state.equation
    var multAndDiv = this.state.multAndDiv
    console.log('equation -> ', equation)
    console.log('multAndDiv -> ', multAndDiv)

    this.setState({equation: calculate(equation,multAndDiv), multAndDiv: false})
    // iterate over string
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
        {this.createNumberView()}
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.createUtilityButton('clear')}
          {this.createUtilityButton('delete')}
          {this.createMathButton('÷')}
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.createNumberButton(7)}
          {this.createNumberButton(8)}
          {this.createNumberButton(9)}
          {this.createMathButton('x')}
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.createNumberButton(4)}
          {this.createNumberButton(5)}
          {this.createNumberButton(6)}
          {this.createMathButton('-')}
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.createNumberButton(1)}
          {this.createNumberButton(2)}
          {this.createNumberButton(3)}
          {this.createMathButton('+')}
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.createNumberButton()}
          {this.createNumberButton(0)}
          {this.createNumberButton('.')}
          {this.createEqualButton()}
        </View>
      </SafeAreaView>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50,
  },

});

export default App;