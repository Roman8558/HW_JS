{
    //Confirms
    //Збережіть у масив відповіді на запитання, задані за допомогою confirm. Використовуйте літеральний 
    //(декларативний) синтаксис масивів ([....,....,....])

    const answers = [
        confirm("Ви готові відповісти на два запитання ?"),
        confirm("точно?"),
        confirm("ну добре")
    ];
    console.log(answers);
}

{
    //Prompts
    //Збережіть у масив відповіді запитаннь, 
    //задані з допомогою prompts. Використовуйте доступ до масиву за індексом та присвоєння (arr[....] = ....)

    let question = prompt("Як тебе звати?");
    let secondQuestion = +prompt("скіки тобі років");
    const answers = [];
    answers[0] = question;
    answers[1] = secondQuestion;
    console.log(answers)
}

{
    //Item access
    //Попросіть користувача ввести (prompt) індекс у масиві. 
    //Виведіть значення елемента за цим індексом. Спробуйте також ввести індекс "length".

    let arr = [1,5,8,6,71,45]

    let value = +prompt("Введіть значеня");

    if (value > arr.length-1) {
        console.log("Шось нете")
    }
    else {
        console.log(arr[value])
    }
}

{
    //Item change
    //Попросіть користувача ввести (prompt) індекс у масиві, а також значення для цього індексу. 
    //Присвойте у введений індекс введене значення
    let arr = [1,5,8,6,71,45]

    let index = +prompt("Введіть індекс")
    let newValue = +prompt("Введіть нове значеня");

    if (index > arr.length-1) {
        console.log("ОЙ-йой знов нето")
    }
    else {
        arr[index] = newValue
        console.log(arr)
    }
}


{
    //Multiply table
    //Створіть таблицю множення 5x5, як масив в пам'ятi, використовуючи декларативний синтаксис 
    //вкладених масивів const arr = [[....], [....], [....], .....]. Числа у вкладених масивах повинні 
    //дорівнювати добутку індексу зовнішнього масиву на індекс внутрішнього масиву: arr[2][3] === 6

    const arr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];
    console.log(arr[2][3])
}

{
    //Multiply table slice
    //Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, в якій не буде нулів
    const arr = [[0,0,0],[0,1,2,3],[0,2,4,6],[0,3,6,9],[0,4,8,12]];
    const arrWithoutZeros =[arr[1].slice(1),arr[2].slice(1),arr[3].slice(1),arr[4].slice(1)];
    console.log(arrWithoutZeros)
}

{
    //IndexOf Word
    //Запитайте у користувача рядок із кількох слів. Запитайте в нього потрібне слово. Виведіть, яким за рахунком є це 
    //слово у рядку з кількох слів. Якщо слово не знайдено, виведіть повідомлення про це (а не -1)

    let arrUser = prompt("Введіть рядок з кількох слів");
    let words = prompt("Введіть слово,черговий немер якого хочете знайти");

    const massif = arrUser.split(/ +/);
    
    if (arrUser.indexOf(words) === -1) {
        console.log("Такого слова тут немає");
    }
    else {
        let answers = massif.indexOf(words)
        console.log(`${answers + 1}`)
    }

}

{
    //Reverse
    //Додайте до масиву п'ять введених користувачем через prompt елементів (використовуйте push). 
    //Створіть інший масив із цими ж елементами в зворотньому напрямку. Для цього витягайте елементи з 
    //першого масиву використовуючи pop, додайте їх до другого використовуючи push.

    const answers = [];
    answers.push(prompt("Як тебе звати?"));
    answers.push(+prompt("Скільки тобі років?"))
    answers.push(prompt("Де зараз проживаєщ?"))
    answers.push(+prompt("Який зараз рік?"))
    answers.push(prompt("Любиш мармелад?"))

    const reverseAnswers = [] 
    reverseAnswers.push(answers.pop())
    reverseAnswers.push(answers.pop())
    reverseAnswers.push(answers.pop())
    reverseAnswers.push(answers.pop())
    reverseAnswers.push(answers.pop())

    console.log(reverseAnswers)



    //Reverse 2
    //Переверніть другий масив із попереднього завдання ще раз (послідовність буде як у першому масиві), 
    //використовуючи shift та unshift.

    answers.unshift(reverseAnswers.shift())
    answers.unshift(reverseAnswers.shift())
    answers.unshift(reverseAnswers.shift())
    answers.unshift(reverseAnswers.shift())
    answers.unshift(reverseAnswers.shift())
}

{
    //Copy
    //Скопіюйте масив створений у завданні Multiply table неглибоко
    const arr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];

    const copy = arr.slice()
}

{
    //Deep Copy
    //Скопіюйте масив, створений у Multiply table, включаючи вкладені масиви (глибока копія).
    //Не треба шукати якесь складне готове рiшення, зробiть це максимально простим чином за умови, 
    //що вам треба скопiювати 6 масивiв - загальний масив та п'ять масивiв у ньому;

    const arr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];

    const copy = [...arr]
}

{
    //Array Equals
    //Створіть код, в якому буде дві змінні з масивами (arr і arr2), які рівні один одному (arr1 === arr2)

    const arr = [1,2,3];
    const arr2 = arr

    if (arr === arr2) {
        console.log("Масиви рівні")

    }
    else {
        console.log("Масиви не рівні")
    }
}

{
    //Flat
    //Зберіть усі елементи всіх вкладених масивів із завдання Multiply table в один масив. 
    //Його довжина повинна дорівнювати 25. Використовуйте spread-оператор

    const arr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]]

    const newArr = [...arr[0],...arr[1],...arr[2],...arr[3],...arr[4]]
    console.log(newArr)
}

{
    //Destruct
    //Вийміть першу, п'яту та дев'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. Виведіть їх

    let line = prompt("Введіть рядок");

    const newLine = line.split("");

    let [a,,,,b,,,,c] = newLine;

    console.log([a,b,c])

    //const line = [prompt("Введіть рядок").split("")]
    
    //let [a,,,b,,,c] = line

    //console.log([a,b,c])
}

{
    //Destruct default
    //Вийміть другу, четверту та п'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. 
    //Якщо у рядку таких букв не виявиться задайте змінним значення за умовчанням ! (знак оклику). Виведіть ці змінні


    let line = prompt("Введіть рядок");

    const newLine = line.split("");

    let [a = "!",,,,b = "!",,,,c = "!"] = newLine;

    console.log([a,b,c])
}

{
    //Multiply table rest
    //Реалізуйте завдання Multiply table slice, використовуючи оператор rest при деструктуризації. 
    //Використовуйте вкладену деструктуризацію. Після отримання чотирьох обрізаних вкладених масивів 
    //- зберіть загальний масив без нулів

    const arr = [[0,0,0],[0,1,2,3],[0,2,4,6],[0,3,6,9],[0,4,8,12]];

    const [[,...first],[,...second],[,...third],[,...fourth],[,...fifth]] = arr;
    const result = [[...second],[...third],[...fourth],[...fifth]]
    console.log(result)
}

{
    //For Alert
    //Є масив ["John", "Paul", "George", "Ringo"]. Виведіть кожне ім'я окремим alert(), використовуючи цикл for .... of

    const name = ["John", "Paul", "George", "Ringo"];

    for (const names of name) {
        alert(`Привіт ${names}`)
    }
}

{
    //For Select Option
    //Використовуючи код вище, створіть список, що випадає, з валютами. Елементи списку, що випадає, створюються за допомогою тега <option>

    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<select>"
    for (const currency of currencies){
        str+= `<option value = ${currency}>${currency}</option>`
    }
    str+= "</select>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

{
    //For Table Horizontal
    //Аналогічно, виконайте виведення імен в осередки таблиці по горизонталі (один рядок з чотирма осередками)
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
       str+= `<td>${name}</td>`;
    }
    str+= "</table>"
    document.write(str) //document.write отобразит ваш HTML на странице
} 

{
    //For Table Vertical
    //Аналогічно, досягніть виведення імен в осередки таблиці по вертикалі (одна колонка з чотирма рядками, у кожному рядку - один осередок)
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
       str+= `<tr><td>${name}</td></tr>`
    }
    str+= "</table>"
    document.write(str)
}

{
    //For Table Letters
    //Використовуючи код вище, створіть таблицю 3x4. У кожному рядку три осередки з літерами, чотири рядки, так як 4 валюти в масиві.

    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table>"
    for (const currency of currencies){ //цикл створює рядки
         // Одна ітерація циклу створює ОДНИЙ РЯДОК
         str+="<tr>"
        console.log(currency)
        for (const letter of currency){ //цикл створює осередки в одному рядку
         //одна ітерація циклу створює ОДИН осередок
            str+=`<td>${letter}</td>`
            console.log(letter)
        }
    }
    str+= "</table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

{
    //For Multiply Table
    //Виведіть таблицю множення 5x5 із завдання Multiply table в таблицю, використовуючи вкладені for.... of та document.write
    const currencies = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]]
    let str = "<table>"
    let i = 0
    
    for (const currency of currencies) {
        str += "<tr";
        if (i % 2 === 1) { // Перевірка на парність індексу рядка
            str += ' style="background-color: lightgray;"'; // Зміна коліру тла
        }
        else {
            str += ' style="background-color: lightgreen;"'; // Зміна коліру тла
        }
        str += ">";
        for (const letter of currencies[i]) {
            str += `<td>${letter}</td>`
        }
        str += "</tr>"
        i++
    }
    
    str += "</table>"
    document.write(str)
}

{
    //Function Capitalize
    //Реалізуйте завдання String: capitalize як окрему функцію:
    const capitalize = str => {
        let result
        if (!str){
        return result
        } else {
         result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
     return result;//саме цей код забезпечить повернення результату функції
   }
   console.log(capitalize("cANBerRa")) //Canberra
}


{
 // Map Capitalize
    // Нехай користувач вводить рядок. Розбийте його за пробілами. 
    // Використовуючи map та capitalize створіть масив у якому кожне слово буде з великої літери. Зберіть масив у рядок назад

    const capitalize = str => {
        if (!str) {
            return str;
        }
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    
    const userInput = prompt("Введіть рядок:");
    const wordsArray = userInput.split(" ");
    const capitalizedArray = wordsArray.map(capitalize);
    const resultString = capitalizedArray.join(" ");
    
    console.log(resultString);
}

{
    // Filter Lexics
    // Нехай користувач вводить рядок. Розбийте його за пробілами. 
    // Використовуючи filter поверніть true якщо елемент масиву не полягає у визначеному масиві 
    // неприпустимих слів. Якщо елемент масиву - неприпустиме слово, функція, передана в filter 
    // повинна повертати false. Зберіть масив у рядок назад
 
    let arr = prompt("Введіть пару слів");
    const wordsArray = arr.split(" ");
    const badWords =[ "олег","макарони","пиво","цигарки"]
    const newWordsArray = wordsArray.filter(x => !badWords.includes(x));
    const resultString = newWordsArray.join(" ");
    console.log(resultString);

}

{
    // Beep Lexics
    // Нехай користувач вводить рядок. Розбийте його за пробілами. Використовуючи map та тернарний 
    // оператор поверніть з функції слово без змін, якщо воно не полягає в якомусь іншому масиві 
    // заборонених слів. Якщо слово полягає в цьому списку, функція повинна повернути слово BEEP. 
    // Зберіть масив назад у рядок через пробіл. Таким чином, ви зможете реалізувати заміну кількох заборонених слів на BEEP.

    let arr = prompt("Введіть пару слів");
    const wordsArray = arr.split(" ");
    const badWords =[ "олег","макарони","пиво","цигарки"]
    const newWordsArray = wordsArray.map(x => badWords.includes(x) ? "BEEP" : x)
    console.log(newWordsArray);

}

{
    {   
        // Reduce HTML
        // Реалізуйте завдання For Select Option використовуючи reduce:
              
        const currencies = ["USD", "EUR", "GBP", "UAH"];
    
        const selectOptions = currencies.reduce((accumulator, currency) => {
          return accumulator + `<option value="${currency}">${currency}</option>`;
        }, "<select>") + "</select>";
        
        document.write(selectOptions);
    
    
    
    }    
    
    {
        
        const arr = ["Kyiv","Kharkiv","Odesa","Lviv"];
        const select = arr.reduce((accumulator,arry) => {
            return accumulator + `<option value="${arry}">${arry}</option>`;
        },"<select>")  + "</select>";
    
        document.write(select);
    }
}

{
    //For Brackets Hell Check
    //Нехай користувач вводить рядок з будь-якими парними дужками в ньому, наприклад [[](){{{[]()}}}]. 
    //Знайдіть місце можливої помилки (непарності) у цьому рядку. Для цього, кожну дужку, що відкриває,
    //додавайте в стек. При знаходженні дужки, що закриває, вона повинна відповідати вершині стека (останнєй доданой дужцi). 
    //Якщо вона не відповідає, виведіть повідомлення про помилку та позицію у рядку. Якщо відповідає – приберіть дужку зі стека. 
    //Якщо рядок помилок не містить, порадуйте користувача.

    for (const character of line) {
        if (character === "[" || character === "(" || character === "{") {
            bracketsStack.push({character, index: i}); // Додаємо відкриваючу дужку до стеку
        } else if (character === "]" || character === ")" || character === "}") {
            if (bracketsStack.length === 0) {
                console.log(`Помилка: Дужка '${character}' не має відповідної відкриваючої дужки.`);
                console.log(`Позиція помилки: ${i + 1}`);
                break;
            } else {
                const lastOpeningBracket = bracketsStack.pop(); // Видаляємо відповідну відкриваючу дужку зі стеку
                if (
                    (character === "]" && lastOpeningBracket.character !== "[") ||
                    (character === ")" && lastOpeningBracket.character !== "(") ||
                    (character === "}" && lastOpeningBracket.character !== "{")
                ) {
                    console.log(`Помилка: Дужка '${character}' не відповідає відкриваючій '${lastOpeningBracket.character}'.`);
                    console.log(`Позиція помилки: ${i + 1}`);
                    break;
                }
            }
        }
        i++;
    }
    
    if (bracketsStack.length === 0) {
        console.log("Дужки розміщені коректно. Всі дужки мають відповідні пари.");
    } else {
        const unmatchedBracket = bracketsStack.pop();
        console.log(`Помилка: Відкриваюча дужка '${unmatchedBracket.character}' не має відповідної закриваючої дужки.`);
        console.log(`Позиція помилки: ${unmatchedBracket.index + 1}`);
    }
}