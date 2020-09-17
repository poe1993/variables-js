const numberOfCupsOfCoffee = 1
const fullName = 'Eric Poe'
console.log(numberOfCupsOfCoffee, fullName)

const message = window.prompt('Hello, what is your name?')
const userName = message
console.log('Hello' + ' ' + userName)

const convertMessageOne = window.prompt('Give me a number.')
const convertMessageTwo = window.prompt('Give me another number.')

const firstOperand = parseFloat(convertMessageOne)
const secondOperand = parseFloat(convertMessageTwo)

console.log(firstOperand)
console.log(secondOperand)

const sum = firstOperand + secondOperand
console.log(
  'If you add' +
    ' ' +
    firstOperand +
    ' ' +
    'and' +
    ' ' +
    secondOperand +
    ' ' +
    'you will get' +
    ' ' +
    sum
)
const difference = firstOperand - secondOperand
console.log(
  'If you subtract' +
    ' ' +
    firstOperand +
    ' ' +
    'and' +
    ' ' +
    secondOperand +
    ' ' +
    'you will get' +
    ' ' +
    difference
)
const product = firstOperand * secondOperand
console.log(
  'If you multiply' +
    ' ' +
    firstOperand +
    ' ' +
    'and' +
    ' ' +
    secondOperand +
    ' ' +
    'you will get' +
    ' ' +
    product
)
const quotient = firstOperand / secondOperand
console.log(
  'If you divide' +
    ' ' +
    firstOperand +
    ' ' +
    'and' +
    ' ' +
    secondOperand +
    ' ' +
    'you will get' +
    ' ' +
    quotient
)
const remainder = firstOperand % secondOperand
console.log(
  'If you divide' +
    ' ' +
    firstOperand +
    ' ' +
    'and' +
    ' ' +
    secondOperand +
    ' ' +
    'the remainder will be' +
    ' ' +
    remainder
)

const array = [
  60,
  82,
  89,
  60,
  7,
  47,
  90,
  74,
  29,
  27,
  56,
  22,
  23,
  9,
  91,
  68,
  5,
  34,
  37,
  36,
]

let sumArray = 0
let average = 0
for (let index = 0; index < array.length; index++) {
  const it = array[index]
  sumArray = sumArray + it
  average = sumArray / array.length
}

console.log(sumArray)
console.log(average)

const smallest = Math.min(...array)
console.log(smallest)

const largest = Math.max(...array)
console.log(largest)
