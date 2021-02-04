// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

/*
let car = {
    manufacturer: "Mazda",
    model: "RX - 8",
    year: 2005,
    speed: 150,
    showInfo: function () {
        return "manufacturer: " + this.manufacturer + "model: " + this.model + "year: " + this.year + "speed: " + this.speed
    },
    getTime: function () {
        let range = +prompt("Введите расстояние в км ");

        this.time = ((range / this.speed).toFixed(1));
        if (this.time > 4) {
            this.time = (`Время на дорогу: ${this.time}ч.; и ${Math.trunc(this.time / 4)}ч. на перерыв`);
        } return this.time;
    }
}
 */
// car.showInfo() 
// car.getTime()
// console.log(car);



// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.






// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. 
// Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

/*
let clock = {
    hour: +prompt("Введите часы: "),
    min: +prompt("Введите минуты: "),
    sec: +prompt("Введите секунды: "),
    showClock: function () {
        return "hour" + this.hour + "min" + this.min + "sec" + this.sec;
    },
    timeChange: function () {
        this.newHour = +prompt("Введите часы: ");
        this.newMin = +prompt("Введите минуты: ");
        this.newSec = +prompt("Введите секунды: ");
    },
    newTime: function () {
        this.resultHour = this.hour + this.newHour;
        this.resultMin = this.min + this.newMin;
        this.resultSec = this.sec + this.newSec;
    },
    checkTimeIsCorrect(resultMin, resultSec) {
        if (resultMin > 59) {
            resultHour = resultHour + 1;
            resultMin = -60;
        }
        if (resultSec > 59) {
            resultMin = resultMin + 1;
            resultSec = -60;
        }
    }

}

clock.newTime();
// clock.showClock(); //вывод времени на экран
console.log(clock);

*/









// YOUTUBE
/*
let car = {
    maxSpeed: 240,
}
console.log(car.maxSpeed);

function speedChange(theCar) {
    theCar.maxSpeed = 300;

    console.log(`Now speed is ${theCar.maxSpeed}`);
}
speedChange(car);

 */

/*
let chooseColor = prompt('enter color')

let enterColor = getColor;
function getColor(color = "red") {
    if (color == "red") {
        return;
    }
    console.log(color);
}
enterColor(chooseColor);
 */
/*
(function () {
    console.log("We are arrow function");
})();
 */
/*
let test = () => console.log("We are red dogs and arrow function");
test()
 */
/*
let myCar = {
    drivers: ["Shymaher", "Vasya", "Petya"],
    getDriver(index) {
        console.log('Текущий водитель -' + this.drivers[index]);
    }
}
myCar.getDriver(0)
 */
/*
let element = {
    class: "theclass",
    value: 40
};

let findElement = document.querySelector(element.class);
findElement.value = element.value;
console.log(findElement);
 */

/* let element = {
    class: 'newClass',
    value: 50
}


let findElement = document.querySelector('.newClass');
findElement.value = element.value;

console.log(findElement);
 */