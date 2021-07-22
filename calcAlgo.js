


var isSymbol = (string) => {
  for (var char of string) {
    if (isAddSub(char)) {return isAddSub(char)}
    if (isMultDiv(char)) {return isMultDiv(char)}
  }
  return false
}
var isAddSub = (string) => {
    for (var char of string) {
        if (char === '+') {return 'addition'}
        else if (char === '-') {return 'subtraction'}
    }
    return false
}
var isMultDiv = (string) => {
    for (var char of string) {
        if (char === '÷') {return 'division'}
        else if (char === 'x') {return 'multiplication'}
    }
    return false
}

var solveTwoNums = (num1, num2, type) => {
  num1 = parseInt(num1.join(''))
  num2 = parseInt(num2)
  if (type === 'division') {return num1 / num2}
  else if (type === 'multiplication') {return num1 * num2}
  else if (type === 'addition') {return num1 + num2}
  else if (type === 'subtraction') {return num1 - num2}
}

var solveTwoNums = (num1, num2, type) => {
  num1 = parseInt(num1.join(''))
  num2 = parseInt(num2)
  if (type === 'division') {return num1 / num2}
  else if (type === 'multiplication') {return num1 * num2}
  else if (type === 'addition') {return num1 + num2}
  else if (type === 'subtraction') {return num1 - num2}
}
var leftToRightAddSub = (string) => {
    // iterate over the string and split on the spaces
    var total = 0
    var skipFirst = false
    if (isSymbol(string[0])) skipFirst = true
    var p = skipFirst ? 1 : 0
    while (p < string.length) {
      if (isSymbol(string[p])) {
        var leftNumber = []
        var rightNumber = ''
        var problemType = isSymbol(string[p])
        var leftDone = false
        var rightDone = false
        var l = p - 1
        var r = p + 1
        while (leftDone === false || rightDone === false) {
          if (leftDone === false) {
              if (string[l] === undefined) {leftDone = true}
              else {leftNumber.unshift(string[l])}
              l--
          }
          if (rightDone === false) {
              if (string[r] === undefined || isSymbol(string[r])) {rightDone = true}
              else {rightNumber += string[r]}
              r++
          }
          if (rightDone && leftDone) {
            total = solveTwoNums(leftNumber,rightNumber,problemType)
            var rest = string.slice(r - 1)
            p = 0
            if (rest.length === 0 ) {return total }
            else {
              if (rest[0] === '-') {
                string = total.toString() + rest
              } else {
                string = total.toString() + rest
              }
            }
          }
        }
      }
      p++
    }
    return total
}

var leftToRightMultDiv = (string) => {
    var total = 0
    for (var p = 0; p < string.length; p++) {
      if (isMultDiv(string[p])) {
        var leftNumber = []
        var rightNumber = ''
        var problemType = isMultDiv(string[p])
        var leftDone = false
        var rightDone = false
        var l = p - 1
        var r = p + 1
        while (leftDone === false || rightDone === false) {
          if (leftDone === false) {
              if (string[l] === undefined || isSymbol(string[l])) {leftDone = true}
              else {leftNumber.unshift(string[l])}
              l--
          }
          if (rightDone === false) {
              if (string[r] === undefined || isSymbol(string[r])) {rightDone = true}
              else {rightNumber += string[r]}
              r++
          }
          if (leftDone && rightDone) {
            total = solveTwoNums(leftNumber,rightNumber,problemType)
            var prev = string.slice(0, l+2)
            var rest = string.slice(r - 1,string.length)
            string = prev + total.toString() + rest
            p = 0
            if (rest.length === 0 ) {return string }
              // else {string = total.toString() + '+' + rest}
          }
        }
      }
    }
    return string
}

var calculate = (string,isMult) => {
  if (string.length === 0) return
  string = isMult ? leftToRightMultDiv(string).toString() : string
  if (string.split('+').length > 1){return leftToRightAddSub(string).toString()}
  if (string[0] === '-') {
    if (string.split('-').length > 2) {
      return leftToRightAddSub(string).toString()
    }
  } else if (string.split('-').length > 1) {
      return leftToRightAddSub(string).toString()
  }
  return string
}

export default calculate