// Задача 10
// Напишите функцию change_register(str), которая принимает 
// в качестве аргумента строку и и заменяет регистр каждого 
// символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», 
// то на выходе должно быть «кАжДыЙ оХоТнИк».

const changeRegister = (str) => {
    let result = ''
 for (let i in str) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase()
    } else {
      result += str[i].toUpperCase()
    }
 
  } 
    return result
}

let string = 'КаЖдЫй ОхОтНиК'

console.log(changeRegister(string))