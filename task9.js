// Задача 9
// Удалите одной регуляркой все повторяющиеся слова из строки, 
// например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.

const removeRepetitions = (str) => {
    let result = str.replace(/((?:(?:\s|^)[a-zа-яё]+(?=\s))+?)\s?\1(?=\s|$)/gi,"$1")
    return result
}

console.log(removeRepetitions('dsf xxx xxx sd'))