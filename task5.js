// Задача 5
// Преобразуйте первую букву каждого слова строки в верхний регистр.
// ПРИМЕР
// ("привет! я хороший человек") -> Привет! Я Хороший Человек"

const capitalize = (str) => {
  let strArr = str.split(' ')
  let newArr = []
  let result
    for (let i in strArr) {
       newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
       result = newArr.join(' ')
    }
    return result
}

console.log(capitalize("привет! я хороший человек"))