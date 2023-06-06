// Задача 1
// Реализуйте функцию, принимающую слово и возвращающую количество 
// заглавных букв в нем  
// ПРИМЕР
// ("проКрАСТИНация") -> 6

const countChars = (str) => {
    let count = 0
    for (char of str) {
        if (char === char.toUpperCase()) {
            count++
        }
    }
    return count
}
