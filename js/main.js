

// Чтобы задать дату в переменной в JavaScript, можно использовать тип данных string:

var today = '06.12.2024';

console.log(today)

// Для сохранения числа ПИ нужен тип данных Number:

let pi = 3.14; 

console.log("Тип данных числа ПИ: ", typeof(pi)) // то есть даже десятичное число имеет тип данных Number

console.log("Тип данных числа ПИ(объект): ", typeof(Math.PI))

// Вывод личных данные:

let name = prompt('Name:') // НЕЛЬЗЯ ВЫВЕСТИ ОКНО ПРОМПТА, ЕСЛИ ОНО ПИШЕТСЯ ПОСЛЕ ОШИБКИ В КОДЕ! 

let address = prompt('Address:')

let phone = prompt('Phone:')

console.log(`Студент: ${name}, Адрес: ${address}, Номер телефона: ${phone}`)

// Доллары & Рубли:

let rubles = prompt('Сколько у вас рублей?')

let dollars =  rubles / 103.38 ;

console.log(`${dollars} $`)

// Константу в JavaScript нельзя изменить после её объявления:

const a = 30;

a = 5664364

console.log(a) // На выводе получим ошибку.

