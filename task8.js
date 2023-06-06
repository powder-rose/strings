// Задача 8
// Дана строка с буквами, пробелами и цифрами. 
// Найдите сумму всех чисел из данной строки.

let str = 'Str 5 5 8 a'

const sumNumbers = (str) => {
   result = str.match(/\-?[\d\.]+/g).reduce((sum, el) => sum + +el, 0)
   return result
}

console.log(sumNumbers(str))