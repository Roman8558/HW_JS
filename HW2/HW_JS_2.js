{
//assign: evaluation
var a = 5;  
var b, c;

b = (a * 5);  // спочатку виконується операція хі змінною а яка =5
b = c = (b/2); // далі змінна b  буде дорірнювати зсміннй с яка обчизлюється з виразу (b/2), де b має значеня з обчислення вище.


var a = 5;  
var b, c;

b = (a * 5);  // спочатку виконується операція хі змінною а яка =5
b = (c = (b/2)); // далі змінна b  буде дорірнювати зсміннй с яка обчизлюється з виразу (b/2), де b має значеня з обчислення вище.
}

{
    //Number: age

    let currentYear = 2024 ;
    let usersYearOfBirth = +prompt("Введіть рік народження");
    let result = currentYear - usersYearOfBirth ;
    alert(result)
}

{
//Number: temperature

    let degreesCelsius = +prompt("Введіть градуси у Цельсіях");
    let degreesCelsiusToFahrenheit = (degreesCelsius  * (1.8) ) + 32;
    let degreesFahrenheit = +prompt ("Введіть шрадуси у Фаренгейтах");
    let degreesFahrenheitToCelsius = (degreesFahrenheit - 32) / (1.8);
    result = "Цельсій у Фаренгейти:"+ " " + degreesCelsiusToFahrenheit + "\nФаренгейти у Цельсіях:"+ " " + degreesFahrenheitToCelsius.toFixed(0);
    alert(result)

}

{
    //Number: divide
    //Зробіть калькулятор для розрахунку поділу націло двох чисел. Використовуйте Math.floor або альтернативи.

    let number = +prompt ("Введіть число");
    let enterDivisor = +prompt ("Введіть дільник");
    let resault = Math.floor ((number/enterDivisor));
    alert(resault)

}

{
    //Number: currency
    //Напишіть код, який обчислює обмін валют за курсом, заданим за допомогою константи const rate = КУРС ВАЛЮТИ 
    //Вважайте значення в одній валюті за допомогою 'prompt', після чого помножіть/поділіть це число на 'rate'.
    //Виведіть результат, використовуючи alert. Обмежте кількість знаків після коми двома 
    //(нас не хвилюють дрібні частини центів/копійок)
    const rate = 38;
    
    let grn = +prompt("Введіть сумму грощей для обміну у гривнях");
    let grnToUsa = Math.round(grn * rate);
    let usa = +prompt("Введіть сумму грощей для обміну у доларах");
    let usaToGrn = Math.round(usa / rate);
    let result = "Гривні у Долари"+ " " + grnToUsa + "\nДолари у Гривні" + " " + usaToGrn;
    alert(result)

}

{
    //Number: RGB
    //За допомогою prompt організуйте введення трьох констант red, green, blue у десятковій системі. 
    //Створіть із них CSS-колір у форматі #RRGGBB використовуючи шістнадцяткову систему числення. 
    //Значення менше 16ти поки що можна не враховувати.

    let red = +prompt("Введіть значення RED від 16 до 255");
    let green = +prompt("Введіть значення GREEN від 16 до 255");
    let blue = +prompt("Введіть значення BLUE від 16 до 255");

    let r = red.toString(16);
    let g = green.toString(16);
    let b = blue.toString(16);

    let resault = "#" + r + g + b;
    alert(resault)
     
}

{
    //Number: flats
    //Зробіть калькулятор, який дозволить вам виходячи з інформації про кількість поверхів у будинку та кількість квартир
    //на поверсі знаходити під'їзд та поверх певної квартири за її номером. Наприклад для 9поверхового будинку по 4 квартири 
    //на поверх 81 квартира знаходиться на 3-му поверсі третього під'їзду. Користувач повинен вводити за допомогою prompt кiлькiсть 
    //поверхiв, кiлькiсть квартир на поверсi та номер квартири. Код повинен видавати пiд'їзд та поверх по номеру квартири.
    let apartmenNumber = +prompt("Введіть номер квартири");
    let numberOfFloors = + prompt("Введіть кількість поверхів");
    let numberOfApartmentsPerFloor = +prompt("Введіть кількість квартир на поверсі");
}

