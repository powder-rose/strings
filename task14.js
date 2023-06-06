// 14
// сгенерировать num чисел до 100 и отсортировать их 
// в порядке возрастания

const generateRandom = (num) => {
    let arr = []
    for (let i = 1; i <= num; i++) {
        let random = Math.round(Math.random() * 100 + 1)
        arr.push(random)
        arr.sort((a, b) => a - b)
    }
    return arr
    
}

console.log(generateRandom(2));