/* 1. Запросить у пользователя его возраст и определить, кем он является: 
ребенком (0–2), подростком (12–18), взрослым (18-60) или пенсионером (60– ...). */

/*
let result = +prompt("How old are you?")

if (result >= 0 && result <= 2)
	{console.log('little')}
else if (result > 2 && result <= 12)
	{console.log('child')}
else if (result > 12 && result<= 18)
	{console.log('teenager')}
else if (result >18 && result<=60)
	{console.log('grown')}
else if (result >60 && result < 120)
	{console.log('pensioneer')}
else if (result >= 120)
	{console.log('Are you an alien?')}
else (result !== Number)
	{console.log('ERROR! Positive number expected!')};
*/






/* 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д). */

/*
let number = +prompt("Choose a number (0-9)")

if (number == 0) { alert('Your special symbol is ")"') }
else if (number == 1) { alert('Your special symbol is "!"') }
else if (number == 2) { alert('Your special symbol is "@"') }
else if (number == 3) { alert('Your special symbol is "#"') }
else if (number == 4) { alert('Your special symbol is "$"') }
else if (number == 5) { alert('Your special symbol is "%"') }
else if (number == 6) { alert('Your special symbol is "^"') }
else if (number == 7) { alert('Your special symbol is "&"') }
else if (number == 8) { alert('Your special symbol is "*"') }
else if (number == 9) { alert('Your special symbol is "("') }
else if (number > 9 || number < 0) { alert('You can choose only "0-9" numbers') }
else if (number = String) { alert('You can not use letters!') }
*/






/* 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры. */

/*
let number = +prompt('Введите трехзначное число: ');
let number1 = Math.floor(number / 100) % 10;
let number2 = Math.floor(number / 10) % 10;
let number3 = Math.floor(number % 10);

if (number >= 0 && number <= 99) {
	alert('Вы ввели неверное число. Число должно быть трехзначным');
} else if (number >= 1000) {
	alert('Вы ввели неверное число. Число должно быть трехзначным');
} else if (number1 === number2 || number2 === number3 || number1 === number3) {
	alert('Найдено совпадение цифр');
} else { alert('Совпадений не найдено'); }
 */






/* 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100. */


/*
let year = +prompt('Введите год: ')

if (year % 4 === 0 && year % 100 != 0) { alert('Этот год высокосный') }
else if (year % 4 != 0 || year % 100 === 0) { alert('Этот год не высокосный') }
 */








/* 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом. */

/*
let number = +prompt('Введите пятиразрядное число: ');

let number1 = Math.floor(number / 10000) % 10;
let number2 = Math.floor(number / 1000) % 10;
let number3 = Math.floor(number / 100) % 10;
let number4 = Math.floor(number / 10) % 10;
let number5 = Math.floor(number % 10);

if (number >= 0 && number <= 9999) {
	alert('Вы ввели неверное число. Число должно быть пятиразрядным');
} else if (number >= 100000) {
	alert('Вы ввели неверное число. Число должно быть пятиразрядным');
} else if (number1 === number5 && number2 === number4) {
	alert('Число является палиндромом');
} else { alert('НЕ палиндром'); }
 */







/*  6. Написать конвертор валют. 
Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, 
и получает в ответ соответствующую сумму. */

/* 
const EUR = +0.8278;
const UAH = +28.1402;
const AZN = +1.7103;

let number = +prompt('Введите сумму в долларах (USD): ');

if (number != +Number) {
	alert('Введите положительное число');
}
let oper = prompt('выберите валюту для конвертации: EUR UAH AZN');
if (oper == 'EUR') {
	alert(Math.floor(number * EUR) + " EUR")
} else if (oper == 'UAH') {
	alert(Math.floor(number * UAH) + " UAH")
} else if (oper == 'AZN') {
	alert(Math.floor(number * AZN) + " AZN")
} else {
	alert('Введите валюту из списка');
} */









/* 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
от 200 до 300 – скидка будет 3 %, от 300 до 500 – 5 %, от 500 и выше – 7 %. */

/*
let summ = +prompt('Введите сумму покупки: ');

if (summ < 200) {
	alert(`Сумма к оплате  ${summ}`);
} else if (summ >= 200 && summ <= 300) {
	alert(`Сумма к оплате  ${summ - (3 * summ) / 100} (скидка 3%) `);
} else if (summ > 300 && summ <= 500) {
	alert(`Сумма к оплате  ${summ - (5 * summ) / 100} (скидка 5%) `);
} else if (summ > 500) {
	alert(`Сумма к оплате  ${summ - (7 * summ) / 100} (скидка 7%) `);
}
 */






/* 8. Запросить у пользователя длину окружности и периметр квадрата.
Определить, может ли такая окружность поместиться в указанный квадрат. */

/*
while (!(len = +prompt('Введите длину окружности: ')) || (!(perim = +prompt('Введите периметр квадрата: '))))
	alert('Поле не может содержать текст или быть пустым!');

if (len / 3.14 <= perim / 4) {
	alert('Такая окружность поместиться в указанный квадрат')
} else if (len / 3.14 > perim / 4) {
	alert('Такая окружность НЕ поместиться в указанный квадрат')
}
 */





/* 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
За каждый правильный ответ начисляется 2 балла.
После вопросов выведите пользователю количество набранных баллов. */

/*
let pi = +prompt(`Число π (Пи) приблизительно равно:
1. 2,14
2. 2,15
3. 3,14
(введите номер правильного ответа)`);

let len = +prompt(`Какая формула определения длины окружности правильная:
1. P = 2πR
2. P = 3πR
3. P = 2π * 2R
(введите номер правильного ответа)`);

let pow = +prompt(`2 в 4 степени равно:
1. 8
2. 16
3. 32
(введите номер правильного ответа)`);

if (pi == 3 && len == 1 && pow == 16) {
	alert("Вы красавчик! Ваш результат - 6/6 баллов");
} else if ((pi != 3 && len == 1 && pow == 2) || (pi == 3 && len != 1 && pow == 2) || (pi == 3 && len == 1 && pow != 2)) {
	alert("Неплохо! Ваш результат: 4/6 баллов")
} else if ((pi != 3 && len != 1 && pow == 2) || (pi != 3 && len == 1 && pow != 2) || (pi == 3 && len != 1 && pow != 2)) {
	alert("Ужасно! Ваш результат: 2/6 баллов")
} else if (pi != 3 && len != 1 && pow != 2) {
	alert(`Поздравляем! Вы приняты на должность
"Мойщик унитазов!": 0/6 баллов`)
}
 */





/* 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
Учтите возможность перехода на следующий месяц, год, а также високосный год. */

/* 
let day = +prompt('Введите день: (1-31) ');
let month = +prompt('Введите месяц: (1-12) ');
let year = +prompt('Введите год: ');

let newDay = day;
let newMonth = month;
let newYear = year;

if (day >= 1 && day <= 29 && month != 2) {
	newDay = day + 1;
} else if (month == 4 || month == 6 || month == 9 || month == 11 && day == 30) {
	newDay = 1;
} if (month < 12 && month == 4 || month == 6 || month == 9 || month == 11 && day == 30) {
	newMonth = month + 1;
} else if (month != 4 || month != 6 || month != 9 || month != 11 && day == 30) {
	newDay = day + 1;
} if (month != [4, 6, 9, 11] && day == 31) {
	newDay = 1;
} if (month < 12 && month != [4, 6, 9, 11] && day == 31) {
	newMonth = month + 1;
} if (month == 2 && day == 28 && year % 4 != 0 || year % 100 == 0) {
	newDay = 1;
} if (month == 2 && day == 28 && year % 4 != 0 || year % 100 == 0) {
	newMonth = month + 1;
} if (month == 2 && day == 28 && year % 4 == 0 && year % 100 != 0) {
	newDay = day + 1;
} if (month == 2 && day == 28 && year % 4 == 0 && year % 100 != 0) {
	newMonth = month;
} if (month == 2 && day == 29 && year % 4 == 0 && year % 100 != 0) {
	newDay = 1;
} if (month == 2 && day == 29 && year % 4 == 0 && year % 100 != 0) {
	newMonth = month + 1;
} if (day == 31 && month == 12) {
	newMonth = 1;
} if (day == 31 && month == 12) {
	newYear = ++year;
}

alert(`Завтра будет: ${newDay}.${newMonth}.${newYear}`);
*/



