
// TEST. Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b.

/*
let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
function min(a, b) {
    if (a > b) {

        alert(`${b} меньше`);
    } else {

        alert(`${a} меньше`);
    }
}
min(a, b)
 */




// 1. Написать функцию, которая принимает 2 числа и  
// возвращает -1, если первое меньше, чем второе; 
// 1 – если первое больше, чем второе;
//  и 0 – если числа равны.

/*
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");

function getCalc(num1, num2) {
    if (num1 < num2) {
        alert('-1');
    } else if (num1 > num2) {
        alert('1');
    } else if (num1 === num2) {
        alert('0');
    }
}
getCalc(num1, num2);
 */



// 2. Написать функцию, которая вычисляет факториал переданного ей числа.


/*
let n = +prompt("Enter  number");
function getFactorial(n) {
    let result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}
alert(getFactorial(n))
 */




// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
// Например: цифры 1, 4, 9 превратятся в число 149.


/*
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");

function getConnect(num1, num2, num3) {
    if (num1 != NaN || num1 != String) {
        num1 = num1.toString()
    }
    if (num2 != NaN || num2 != String) {
        num2 = num2.toString()
    }
    if (num3 != NaN || num3 != String) {
        num3 = num3.toString()
    }
    return num1 + num2 + num3;
}
alert(getConnect(num1, num2, num3));
*/
// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.


/*
let num1 = +prompt("Введите длину");
let num2 = +prompt("Введите ширину");

function getArea(num1, num2) {
    num1 = num1 || num2;
    num2 = num2 || num1;
    return num1 * num2;
}
alert("Площадь равна: " + getArea(num1, num2))
 */


//5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.

/*
let num1 = +prompt("Введите число");
let sum = 1;
let i;

function getPerfect(num1) {
    for (i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            sum = sum + i;
        }
    }
    return (num1 === sum) && (num1 != 1) ? (`${num1} - это совершенное число`) : (`${num1} - не совершенное число`);
}
alert(getPerfect(num1));
 */






// // NOT DONE  6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
// и выводит только те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 



/*
let num = +prompt("Введите минимальное число диапазона");
let num2 = +prompt("Введите максимальное число диапазона");

let num2 >= num1 >= num);
let sum = 1;
let i;

function getPerfect(num1) {
    for (i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            sum = sum + i;
        }
    }
    return (num1 === sum) && (num1 != 1) ? (`${num1} - это совершенное число`) : (`${num1} - не совершенное число`);
}
alert(getPerfect(num1));

 */




// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и 
// выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

/*
let hours = +prompt("Введите часы (01-23)");
let min = +prompt("Введите минуты (00-59)");
let sec = +prompt("Введите секунды (00-59)");

min = min || "00";
sec = sec || "00";

function showTime(hours, min, sec) {
    return "Текущее время: " + "«" + hours + ": " + min + ": " + sec + "»"
}
alert(showTime(hours, min, sec));

*/




// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.


/*
let hours = +prompt("Введите часы (01-23)");
let min = +prompt("Введите минуты (00-59)");
let sec = +prompt("Введите секунды (00-59)");

min = min || "00";
sec = sec || "00";

function showSeconds(hours, min, sec) {
    return "Время в секундах: " + Number((hours * 60 * 60) + (min * 60) + sec);
}
alert(showSeconds(hours, min, sec));

*/





// 9. Написать функцию, которая принимает количество секунд, 
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

/*
let seconds = +prompt("Введите часы (01-86399)");
let max = 86400;

function showTime(seconds) {

    let hour = Math.trunc(seconds / 3600);
    if (hour < 9) {
        hour = "0" + hour;
    }
    let min = (Math.trunc((seconds % 3600) / 60));
    if (min < 9) {
        min = "0" + min;
    }
    let sec = (seconds % 3600) % 60;
    if (sec < 9) {
        sec = "0" + sec;
    }
    return (`${hour}:${min}:${sec}`)
}
alert(showTime(seconds));
*/



// 10. Написать функцию, которая считает разницу между датами. 
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: 
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»


/*
function showTime(seconds) {

    let hour = Math.trunc(seconds / 3600);
    if (hour < 9) {
        hour = "0" + hour;
    }
    let min = (Math.trunc((seconds % 3600) / 60));
    if (min < 9) {
        min = "0" + min;
    }
    let sec = (seconds % 3600) % 60;
    if (sec < 9) {
        sec = "0" + sec;
    }
    return (`${hour}:${min}:${sec}`)
}

function showSeconds(hours1, min1, sec1) {
    return Number((hours1 * 60 * 60) + (min1 * 60) + sec1);
}

function getDifference() {
    let hours1 = +prompt("Введите часы первой даты (01-23)");
    let min1 = +prompt("Введите минуты первой даты (00-59)");
    let sec1 = +prompt("Введите секунды первой даты (00-59)");

    let hours2 = +prompt("Введите часы второй даты (01-23)");
    let min2 = +prompt("Введите минуты второй даты (00-59)");
    let sec2 = +prompt("Введите секунды второй даты (00-59)");

    let result1 = showSeconds(hours1, min1, sec1);
    let result2 = showSeconds(hours2, min2, sec2);
    let seconds = Math.abs(result1 - result2);

    let finish = showTime(seconds);
    alert("Разница во времени: " + finish);
    return (showTime(seconds));


}
getDifference();


 */

































/* ФУНКЦИИ */
/* 1  */

/* let result = getMax(95, 65);

alert(result);

function getMax(a, b) {

    if (a > b) {
        return a;
    } else {
        return b;
    }
}

 */
/* Написать ф-ю, которая возводит переданное число в указанную степень */
/* ? */


/* НАписать ф-ю которая принимает 2 числа и знак ( + - * /) */
/* let num1 = +prompt("Number 1"),
    num2 = +prompt("number2"),
    symb = prompt("Действие + - * / ");

function getGalc(num1, num2, symb) {
    if (symb == "+") {
        return num1 + num2;
    }
    if (symb == "-") {
        return num1 - num2;
    }
    if (symb == "*") {
        return num1 * num2;
    }
    if (symb == "/") {
        return num1 / num2;
    }
    if (symb == "") {
        return num1 + num2;
    }
}
let result = getCalc(num1, num2, symb);
 */

//let n = +prompt('Введите простое число');
//if (n % 100) {
//    alert(`${i}!`);
//}


/*
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('А родители разрешили?');
    }
}

let age = prompt('Сколько вам лет?', 18);

if (checkAge(age)) {
    alert('Доступ получен');
} else {
    alert('Доступ закрыт');
}
 */


/* Написать ф - ю, которая проверяет простое ли число. */

/* function chechNumber(a) {
    let count = 0;

    for (let i = 1; i <= a && count < 4; i++) {
        if (a % i == 0){
            count++;
        }
    }
    if (count == 2) {
        console.log('Число простое')
    } else {
        console.log('Число НЕ простое')
    }

}
chechNumber(5)
 */
/*
function getRest(a, b) {
    let res = a - b;

    while (res >= b) {
        res = res - b;
        console.log(res);
    }
}
getRest(12, 5)
 */



//Написать ф- ю которая принимает от 1 до 5 чисел и восвращает их сумму
/*
function getSum() {
    let = sum = 0;
    for (let i = 0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;

}
console.log(getSum(12, 5, 5, 5, 7, 55));
 */

//Написать ф- ю которая принимает от 1 до 5 чисел и восвращает большее
/*
function getMax() {
    let = max = arguments[0];
    for (let i = 1; i<arguments.length && i<=5; i++){
        if (max < arguments[i]){
            max = arguments[i];
        }

    }
    return sum;

}
console.log(
    getMax(12, 5, 5, 7, 55));
 */

// Принимает дату, (д, м, г)
// возвращает дату след дня в виде строки дд.мм.ггг.
// Проверку на высокосный сделать функцией. 

/*
function getNextDay(){
    let day = +prompt('Введите день');
    let mouse = +prompt('Введите месяц');
    let year = +prompt('Введите год');
    let short, mouseLength;

    function checkYear (yeardate) {
        return yeardate % 4 === 0;
    }

    if (mouse === 4 || mouse === 6 || mouse === 9 || mouse === 11) {
    mouseLength = short;
    }

    if (day === 31 && mouse === 12) {
    day = 1;
    mouse = 1;
    year++;
    } else if ( year % 4 === 0 && mouse === 2 && day === 29) {
        day = 1;
        mouse++;
    } else if (day === 31) {
    day = 1;
    mouse++
    } else if (day === 30 && mouseLength === short) {
    day = 1;
    mouse++;
    }else {
    day++;
    }

    console.log(следующий день ${day}.${mouse}.${year}.);
}



 */