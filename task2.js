// Задача 2
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'

const changeStr = (str) => {
    let re = /@/gi
    return str.replace(re, '!')
    
}

console.log(changeStr('aaa@bbb@ccc'))