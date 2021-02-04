"use strict"

/* 1. Создать массив «Список покупок».
Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.
Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный. */


let shoppingList = [
    {
        name: "Tekila",
        quantity: 2,
        IsBought: true,
    },
    {
        name: "lime",
        quantity: 4,
        IsBought: false,
    },
    {
        name: "whiskey",
        quantity: 1,
        IsBought: false,
    },
    {
        name: "meat",
        quantity: 5,
        IsBought: true,
    },
    {
        name: "beer",
        quantity: 15,
        IsBought: false,
    },

]
function sortList(arr) {
    arr.sort(function (a, b) {
        return a.IsBought - b.IsBought;
    })
    console.log(arr);
}
sortList(shoppingList);

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.

function addItem(arr, item) {
    let index = arr.findIndex(function (x) {
        x.name === item.name
    });

    if (index == -1) {
        arr.push({
            name: item.name,
            quantity: item.quantity,
            IsBought: false,
        });
    } else {
        arr[index].quantity = arr[index].quantity + item.quantity;
    }

    console.log(index);
}

addItem(shoppingList, { name: "avocado", quantity: 2 });

//////////////////////////////
function contains(item, shoppingList) {
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i] !== item) {
            return true;
        }
    }
    return false;
}
if (contains) {
    shoppingList.push({ name: "lemon", need: 7, bought: false })
} else {
    for (let i = 0; i < shoppingList.length; i++) {
        if ("lemon" === shoppingList[i].item) {
            shoppingList[i].need++;
        }
    }
}
console.log(shoppingList);

////////////////////////////////
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный


function buyItem(arr, item) {
    let index = arr.findIndex(x => x.name === item);

    if (index >= 0 && arr[index] != true) {
        arr[index].IsBought = true;
    }

    console.log(arr[index]);
}

buyItem(shoppingList, "lime");

// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
// количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

let shopCheck = [
    { name: "cheese", quantity: 5, price: 22 },
    { name: "candy", quantity: 20, price: 5 },
    { name: "bread", quantity: 2, price: 14 },
    { name: "pepsi", quantity: 3, price: 24 },
]
console.log(shopCheck); // Распечатка чека на экран;

function printCheck(array) {
    array.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}: ${item.quantity} шт * ${item.price} = ${item.quantity * item.price} грн.`);
    })
}
printCheck(shopCheck);


// Подсчет общей суммы покупки;
function summAll(array) {
    let summ = 0;
    array.forEach(function (item, index, arr) {
        summ = summ + item.quantity * item.price
    })
    console.log(`Общая сумма покупки: ${summ} грн. `);
}
summAll(shopCheck);

// Получение самой дорогой покупки в чеке;

function mostExpensive(arr) {
    let purchase = 0;
    let name;
    for (let i = 0; i < arr.length; i++) {
        if (purchase < arr[i].quantity * arr[i].price) {
            purchase = arr[i].quantity * arr[i].price;
            name = arr[i].name;
        }
    }
    console.log(`Самая дорогая покупка в чеке - ${name + " = " + purchase} грн.`);
}
mostExpensive(shopCheck);

// Подсчет средней стоимости одного товара в чеке.


function checkAvg(arr) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        summ = summ + (arr[i].quantity * arr[i].price);
    }
    let avgSumm = summ / arr.length;
    console.log(`Средняя стоимость одного товара: ${avgSumm} грн.`);
}


checkAvg(shopCheck);


//3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
//Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
//Написать функцию, которая принимает массив стилей и текст, 
//и выводит этот текст с помощью document.write() в тегах <p></p>, 
//добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.



let arr = [{
    styleName: 'color',
    styleValue: 'green'
},
{
    styleName: 'font-size',
    styleValue: '20px'
},
{
    styleName: 'background',
    styleValue: '#f4f45f45'
}
];


function buildNode(styles, text = 'default') {

    let stylesList = '';

    for (let i = 0; i < styles.length; i++) {
        stylesList = stylesList + styles[i].styleName + ':' + styles[i].styleValue + ';'
    }

    document.write(`<p style="${stylesList}"> ${text} </p>`);

}

buildNode(arr, 'Body you`re a boy make a big noise..');


// 4. Создать массив аудиторий академии.
// Объект - аудитория состоит из названия, количества посадочных мест(от 10 до 20) и названия факультета, 
// для которого она предназначена. 
// Написать несколько функций для работы с ним ^

// Вывод на экран всех аудиторий;

// NOT DONE

/*
let auditorium = [
    {
        name: "math",
        number: 18,
        faculty: "science",
    },
    {
        name: "chemistry",
        number: 17,
        faculty: "science",
    },
    {
        name: "physics",
        number: 16,
        faculty: "science",
    },
    {
        name: "German language",
        number: 12,
        faculty: "Foreign languages",
    },
    {
        name: "spanish language",
        number: 12,
        faculty: "Foreign languages",
    },
    {
        name: "History of Ukraine",
        number: 14,
        faculty: "History",
    },
    {
        name: "History of Europe",
        number: 14,
        faculty: "History",
    },
    {
        name: "Physical training",
        number: 20,
        faculty: "sport",
    },
    {
        name: "altletics",
        number: 11,
        faculty: "sport",
    },
]
// console.log(auditorium);

// Вывод на экран аудиторий для указанного факультета;
function showPointed(choosen) {
    for (i = 0; i < auditorium.length; i++)
        if (auditorium[i].faculty == choosen) {
            console.log(auditorium[i].name);
        }

}
showPointed(faculty[science]);
*/


