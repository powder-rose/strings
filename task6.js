// Задача 6
// Дана строка 'ahb acb aeb aeeb adcb axeb'. 
// Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: 
// буква 'a', любой символ, буква 'b'.

let str = 'ahb acb aeb aeeb adcb axeb'

let newString = str.match(/a.b/g)
console.log(newString)