// 13
// Написать функцию, которая возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// (3, 2) → 3 * 3 = 9, (3, 3) → 3 * 3 * 3 = 27
const pow = (x, y) => {
    let result = x
    for (let i = 1; i < y; i++) {
        result *= x
    }
        return result
}

console.log(pow(3, 3))