// Задача 7
// Определите, что переданная строка является емэйлом. 
// Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, 
// my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, 
// mail@yandex.ru.

const checkEmail = (str) => {
    let reg =  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    let result
    if (reg.test(str)){
        result = true
    } else {
        result = false
    }
    return result
}

console.log(checkEmail('my-mail@mail.ru'))