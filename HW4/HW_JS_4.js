{
    //Number: odd
    //За допомогою prompt дізнайтесь число, введене користувачем. За допомогою if 
    //перевірте, чи число коректно перетворено з рядка. У разі помилки виведіть 
    //повідомлення Виведіть парне число чи ні, використовуючи if.

    let number = prompt("Введіть число");
    let numberCheck = Number(number);

    if (Number.isInteger(numberCheck)) {
        console.log("Число перетворено коректно");

        if (numberCheck % 2 === 0) {
            console.log("Число парне")
        }
        else {
            console.log("Число не парне");
        }
    }
    else {
        console.log("Число не було перетворене")
    }

}

{
    //String: lexics
    //Запитайте у користувача текст і перевірте його на наявність некоректного слова або 
    //кількох некоректних слів. Використовуйте метод indexOf (або includes) рядки.
    //"123".indexOf("23") //повертає 1 - позицію підрядка "23" до "123"
    //"abcdef".indexOf("ef") // 4
    //"12345".indexOf("some bad word") // -1 - не знайдено

    let someSentence = prompt("Ведіть рядок");

    if (someSentence.indexOf("***") !== -1){  //замість зірочок потрібно ввести некоректне слово яке ми шукаємо 
        
        console.log("І цими губами ти цілуєш свою матір?!сором!!!");
    }
    else{
        console.log("Ви дуже чемний пан");
    }
}


{
    //Boolean
    //Напишіть код, який запитує ті чи інші питання з відповіддю "так"/"ні" за допомогою confirm, і зберігає відповіді в змінних

    let answerToTheQuestion = confirm("Маєш гпрний настрій ?") ?"так" : "ні";
    console.log(answerToTheQuestion);
}

{
    //Boolean: if
    //Розширте попереднє завдання умовами за отриманими змінними умовами (if-else). Наприклад, якщо ви питаєте стать користувача з 
    //допомогою confirm, то за умовою зробіть alert("Ви жінка") та alert("Ви чоловік")

    let question = confirm("Ви чоловічої статі ?");

    if (question === true) {
        alert("Вітаю ви Пан")
    }
    else {
        alert("Вітаю ви Пані")
    }
}

{
    //Comparison: sizes
    //Зробіть переклад переклад з нашої системи розмірів до американської чи 
    //будь-якої на вибір. Використовуйте prompt, умови порівняння та alert.
    let sizeUk = prompt("виберіть опцію: \n1-верхній одяг; \n2-білизна \n3-шкарпеки,чулки; \n4-дитячий розмір");

    if (sizeUk === "1") {
    let  outerwear = prompt("Введіть розмір (наприклад 8)")
    let usSize;

    switch (outerwear) {
        case '8':
            usSize = '40';
        break;
        case '10':
            usSize = '42';
        break;
        case '12':
            usSize = '44';
        break;
        case '14':
            usSize = '46';
        break;
        case '16':
            usSize = '48';
        break;
        case '18':
            usSize = '50';
        break;       
        case '20':
            usSize = '52';
        break;
        case '22':
            usSize = '54';
        break;
        default:
            alert("Ви ввели невірний розмір");
         break;       
     }

     if (usSize) {
        alert(`Ваш український розмір одягу: ${usSize}`);
    } 
} else if (sizeUk === "2") {
    let  outerwear = prompt("Введіть розмір (наприклад 24)")
    let usSize;

    switch (outerwear) {
        case '24':
            usSize = '42';
        break;
        case '26':
            usSize = '44';
        break;
        case '28':
            usSize = '46';
        break;
        case '30':
            usSize = '48';
        break;
        case '32':
            usSize = '50';
        break;
        case '34':
            usSize = '52';
        break;       
        case '36':
            usSize = '54';
        break;
        case '38':
            usSize = '56';
        break;
        default:
            alert("Ви ввели невірний розмір");
         break;       
    }

    if (usSize) {
        alert(`Ваш український розмір одягу: ${usSize}`);
    } 
 } else if (sizeUk === "3") {
    let  outerwear = prompt("Введіть розмір (наприклад 8)")
    let usSize;

    switch (outerwear) {
        case '8':
            usSize = '21';
        break;
        case '8 1/2':
            usSize = '22';
        break;
        case '9':
            usSize = '23';
        break;
        case '9 1/2':
            usSize = '24';
        break;
        case '10':
            usSize = '25';
        break;
        case '10 1/2':
            usSize = '26';
        break;       
        case '11':
            usSize = '27';
        break;
        case '11 1/2':
            usSize = '28';
        break;
        default:
            alert("Ви ввели невірний розмір");
         break;       
    }

    if (usSize) {
        alert(`Ваш український розмір одягу: ${usSize}`);
    } 
 } else if (sizeUk === "4") {
    let  outerwear = prompt("Введіть зріст дитини (наприклад 50)")
    let usSize;

    switch (outerwear) {
        case '50':
            usSize = '\nОбхват грудей-40 \nТалія-40 \nБедра-42 \nСпина-14,5';
        break;
        case '56':
            usSize = '\nОбхват грудей-42 \nТалія-42 \nБедра-44 \nСпина-16';;
        break;
        case '62':
            usSize = '\nОбхват грудей-44 \nТалія-44 \nБедра-46 \nСпина-17,5';;
        break;
        case '68':
            usSize = '\nОбхват грудей-46 \nТалія-46 \nБедра-48 \nСпина-19';;
        break;
        case '74':
            usSize = '\nОбхват грудей-48 \nТалія-47 \nБедра-50 \nСпина-20,2';;
        break;
        case '80':
            usSize = '\nОбхват грудей-50 \nТалія-49 \nБедра-52 \nСпина-21,4';;
        break;       
        case '86':
            usSize = '\nОбхват грудей-51,5 \nТалія-50 \nБедра-54 \nСпина-22,6';;
        break;
        case '92':
            usSize = '\nОбхват грудей-53 \nТалія-51 \nБедра-56 \nСпина-23,8';;
        break;
        case '98':
            usSize = '\nОбхват грудей-55 \nТалія-52 \nБедра-58 \nСпина-25';;
        break;
        case '104':
            usSize = '\nОбхват грудей-57 \nТалія-53 \nБедра-60 \nСпина-26';;
        break;
        case '110':
            usSize = '\nОбхват грудей-59 \nТалія-54 \nБедра-62 \nСпина-27.4';;
        break;
        case '116':
            usSize = '\nОбхват грудей-61 \nТалія-55 \nБедра-64 \nСпина-28,6';;
        break;
        default:
            alert("Ви ввели невірний розмір");
         break;       
    }

    if (usSize) {
        alert(`Ваш український розмір одягу: ${usSize}`);
    } 
 }

}

{
    //Ternary
    //Запитайте у користувача стать (confirm). Виведіть за допомогою alert "Ви чоловік" або "Ви жінка". 
    //Використовуйте тернарний оператор.
    let answerToTheQuestion = confirm("Маєш гпрний настрій ?") ?"так" : "ні";
    console.log(answerToTheQuestion);

}

{
    //Training
    // Перегляньте вирази нижче і спробуйте обчислити їхній результат. Перевірте себе, використовуючи Console
!!2 //true
!!0 //false
!!1 //true
// or
2 || 1 // true якщо введуть 2 або 1 , 1 або 2 , або просто 1 або просто 2
2 || 0 // true якщо введуть 2 або 0, 1 або 2 , або просто 1 або просто 2
//and
2 && 1 // true 1 
1 && 2 // true 2 
0 && 2 // false бо, 0 видасть false в будьякому випадку 
// or and and difference
0 || 1 || 2  // виводе вірне значення 0- це false тому виведе 1-true
0 && 1 && 2 // вивиде false бо, 0 це false в будьякому випадку 
2 || 1 || 0 // виведе 2, бо виводить перше вірне значення, а це в данному випадку 2 
2 && 1 && 0 // 0 = false коли є false буде виводитись саме воно, намаючи значеня яким по рахунку воно стоїть
confirm('left') || confirm('right') // при першому натисканні на ок (один чи два рази) буде зберігатись true, false буде при натискані на останьому конформі 
confirm('left') && confirm('right') // буде повертати true поки користувач натискає ок, при натискані на скасувати збереже false
//null, undefined, so on
null || 2 // оператор || повертає перше правельне значення. "null" завжди буде видавати false, тому нам повернуть 2(true)
undefined && 1 // оператор && повертає перше хибне значення. "underfined" завжди буде давати faulse, тому ми отримаємо faulse
alert("Hello") && confirm('Are you sexy?'); // вираз не виведе результат в консолі, для цього потрібно використовувати 
alert("Hello") || confirm('Are you drunk?'); // повертає ||  правельне значення, тому при натисканні на alert ок ми побачимо питання confirm якщо там знову натиснемо ок то отримаємо у браузері true, якщо виберемо скасувати ми побачимо false.
//brackets and complex expressions
(undefined || 2) && (3 || 0) //  в перших душках буде "2" бо це true в інших душках буде "3" бо це також true. Коли будемо порівнювати те що вийшло в душка на поверне в боаузері "3" зі значенням true
(2 && 1) || (null && 0) //  в перших душках буде "1", в інших душках буде "null". В порівняні результату дужок ми отримаємаємо "1"-true
(2 > 1) && "greater" // обидва значенн true, тому ми отримаємо у консолі браузера "greater".
(2 < 1) && null // оба значеня false, тому ми отримаємо значення (2 < 1) - бо оператор && повертає перше не правелне значеня.
null && (2 < 1)  // так само як і попередньому прикладі отримаємо перше значенн "null" бо обидва значеня false
// ternary operator
1 ? "one" : "not one"  // якщо умова є істиною то повертає оперант "one", інакше повертає "not one"
0 ? "zero" : "not zero"  // в цьому випадку "0" це не є істиною умовою тому повертає нам другу умову "not zero"
"0" ? "\"zero\"" : "not `zero`" // в цьому випадку умова є істиною бо в нас заповлений рядок який поветає нам true тобто "zero"
parseInt("0") ? 'true' : 'false' // в цьому випадку умова не є істиною бо ми отримаємо 0 а це буде false
("" || 2) && (3 || "3.5") || (4 && 5) // в перших дужках буде 2 в наступних буде 3 і в останніх буде 5. в першому порівняні 2 && 3 буде 3. і в останьому 3 || 5 , буде 3. тому відповідь у браузері буде 3.
(-1 + 1) && "zero"  // отримаємо перші дужки бо отримаємо після математичної операції 0 о це false.
"-1" + 1 && "oups" // обидва значення true тому отримаємо "oups".
(typeof null === 'object') ? "null is object" : "null is null" // строге порівнння поверне нам true, тому ми отримаємо "null is object".
// ternary && ||
Math.random() < 0.5 && 'less' || 'more' // тут відпоівдь буде 50 на 50 в залежності від того що нам буде видавати функція Math.random()  якщо меньше ніж 0.5 тот ми будемо отримувати less, якщо більше ніж  0.5  то будемо бачити more.
(a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a // той самий приклад що і попередній тікі в цьому виконання функції Math.random() ми зберігіємо в змінну а і додаємо її к кінцевому результату.
//in for array
[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' // тут ми отримаємо число 3, бо це число знаходиться під номеремо 7 в масиві. 3 більше ніж число -1 тому наш результат 'prime. миб отримали 'not found'  якби в масиві не знайли єлемент яких знаходиться під 7мим порядковим номером.
}

{
    //Prompt: or
    //Для завдання Number: age використовуючи АБО || вивести повідомлення про помилку (alert) якщо користувач не введе вік або натисне 
    //скасування (тобто prompt видасть порожній рядок або null, що інтерпретується як false).

    let age = +prompt("Введіть ваш вік");
    let ageMess = age || age === Number.isInteger(age) ? `Ваш вік ${age}` : "не туди клацнув";
    alert(ageMess)
}

{
    //Confirm: or this days
    //За допомогою цього ж трюку (використання АБО для запуску альтернативи) зробіть примхливого робота, 
    //який у confirm запитує "шопінг?", а у разі відмови - виводити alert "ти - бяка".
    
    let question = confirm("шопінг?") ;
    let answer = question || question === true ? "потьопали" : "ти - бяка";
    alert(answer)

}

{
    //Confirm: if this days
    //Зробити те саме за допомогою if

    let question = confirm("шопінг?") ;

    if (question === true) {
        alert("потьопали");
    }
    else {
        alert("ти - бяка");
    }
}

{
    //Default: or
    //Попросіть користувача ввести ПІБ в три різні змінні. Використовуючи АБО || додайте рядки за промовчанням, 
    //які будуть зберігатися у внутрішніх змінних якщо користувач ввів порожній рядок або натиснув "Скасувати". 
    //Наприклад, якщо ви на кроці введення прізвища натиснете Escape, прізвище буде "Іванов"

    let lastName = prompt("Введіть призвіще") || "Забутько";
    let name = prompt("Введіть імя") || "Петро";
    let surname = prompt ("Введіть імя по батькові") || "Василькович";
    alert(`${lastName} ${name} ${surname}`);
}

{
    //Default: if
    //Зробіть те саме за допомогою if та else

    let lastName = prompt("Введіть призвіще");
    let name = prompt("Введіть імя");
    let surname = prompt ("Введіть імя по батькові");
     if (!lastName) {
        lastName = "Забутько"
     }

     if (!name) {
        name = "Петро"
     }

     if (!surname) {
        surname = "Василькович"
     }
   alert(`${lastName} ${name} ${surname}`);
}

{
    //Login and password
    //Напишіть код, який запитує логін, перевіряє його на вірність, 
    //якщо логін вірний, просить ввести пароль і перевіряє його. В разі розбіжності логіну чи пароля виводити 
    //alert з текстом помилки. У разі успішного логіну – alert з привітанням. Правильні логін: admin та пароль: qwerty. 
    //Використовуйте вкладені if та else.

    let login = prompt("Введіть логін");

    if (login === "admin") {
        let password = prompt("Введіть пароль");

        if (password === "qwerty"){
            alert("Ласково просимо")
        }
        else {
            alert("Невірний пароль")
        }
    }
    else{
        alert("невірний логі")
    }
}

{
    //Currency exchange
    //Попросіть користувача ввести валюту (наприклад, usd, eur, інші валюти додати до смаку) за допомогою prompt.
    //Також поцікавтеся купити чи продати він бажає (використовуйте confirm).
    //За допомогою декількох if та тернарного оператора всередині кожного з if задайте змінну rate, визначальну курс конкретної валюти на купівлю чи продаж. Зверніть увагу на місце оголошення змінної rate - вона має бути доступна в коді після всіх цих if.
    //Попросіть користувача ввести суму на обмін
    //Порахуйте та виведіть результат шляхом множення або поділу на rate
    //Дайте можливість користувачеві вводити назви валют у будь-якому регістрі (UsD, eUR). Для цього в if використовуйте toUpperCase (або toLowerCase)

   let currency = prompt("Ведіть валюту (наприклад USD, EUR):").toUpperCase;
   let isBuying = confirm ("Будете купувати?")
   let rate 
    if (isBuying) {
      rate = currency === "USD" ? 27.5 : (currency === "EUR" ? 32 : 1)
    } else {
      rate = currency === "USD" ? 26.5 : (currency === "EUR" ? 30 : 1)
    }
  let amount = prompt ("Введіть суму:");
  var result = isBuying ? amount * rate : amount / rate;
  alert("Результат обміну: " + result.toFixed(2) + " " + currency);
}

{
    //Scissors
    //Зробіть гру "камінь-ножиці-папір". Користувач вводить свій варіант через prompt, 
    //програма генерує свій варіант через Math.random() і виводить через alert. Наступний alert виводить ім'я переможця чи "нічия"

    let user = prompt("Оберіть та введіть: камінь, ножиці чи папір: ").toLowerCase();

    let computer = Math.random() 
    if (computer < 0.3){
        computer = "камінь"
    } else if (computer < 0.6) {
        computer = "ножиці"
    } else {
        computer = "папір"
    }

    alert("Комп'ютер обрав: " + computer);

    let result
    if (user === computer) {
        result = "нічія"
    } else if (
        (user === "камінь" && computer === "ножиці") ||
        (user === "ножиці" && computer === "папір")  ||
        (user === "папір" &&  computer === "камінь")
    ) {
        result = "Ви переможець";
    } else {
        result = "лузер!";
    }
    alert(result);
}

{
    //Додаткове завдання
    //Зліпити всі завдання в один текст, таким чином, щоб спочатку відбувалося введення назви завдання,
   // а потім за допомогою if запускався код конкретного завдання

   let taskSelection = prompt("Введіть назву завдання");

   if (taskSelection === "Number: odd") {

    let number = prompt("Введіть число");
    let numberCheck = Number(number);

    if (Number.isInteger(numberCheck)) {
        console.log("Число перетворено коректно");

        if (numberCheck % 2 === 0) {
            console.log("Число парне")
        }
        else {
            console.log("Число не парне");
        }
    }
    else {
        console.log("Число не було перетворене")
    }
    
   }

   if (taskSelection === "String: lexics") {
    let someSentence = prompt("Ведіть рядок");

    if (someSentence.indexOf("***") !== -1){  //замість зірочок потрібно ввести некоректне слово яке ми шукаємо 
        
        console.log("І цими губами ти цілуєш свою матір?!сором!!!");
    }
    else{
        console.log("Ви дуже чемний пан");
    }
   }

   if (taskSelection === "Boolean") {
    let answerToTheQuestion = confirm("Маєш гпрний настрій ?") ?"так" : "ні";
    console.log(answerToTheQuestion);
   }

   if (taskSelection === "Boolean: if") {
    if (question === true) {
        alert("Вітаю ви Пан")
    }
    else {
        alert("Вітаю ви Пані")
    }
   }

   if (taskSelection === "Comparison: sizes") {
    let sizeUk = prompt("виберіть опцію: \n1-верхній одяг; \n2-білизна \n3-шкарпеки,чулки; \n4-дитячий розмір");

    if (sizeUk === "1") {
    let  outerwear = prompt("Введіть розмір (наприклад 8)")
    let usSize;

    switch (outerwear) {
        case '8':
            usSize = '40';
        break;
        case '10':
            usSize = '42';
        break;
        case '12':
            usSize = '44';
        break;
        case '14':
            usSize = '46';
        break;
        case '16':
            usSize = '48';
        break;
        case '18':
            usSize = '50';
        break;       
        case '20':
            usSize = '52';
        break;
        case '22':
            usSize = '54';
        break;
        default:
            alert("Ви ввели невірний розмір");
         break;       
     }

     if (usSize) {
        alert(`Ваш український розмір одягу: ${usSize}`);
    } 
} else if (sizeUk === "2") {
    let  outerwear = prompt("Введіть розмір (наприклад 24)")
    let usSize;

    switch (outerwear) {
        case '24':
            usSize = '42';
        break;
        case '26':
            usSize = '44';
        break;
        case '28':
            usSize = '46';
        break;
        case '30':
            usSize = '48';
        break;
        case '32':
            usSize = '50';
        break;
        case '34':
            usSize = '52';
        break;       
        case '36':
            usSize = '54';
        break;
        case '38':
            usSize = '56';
        break;
        default:
            alert("Ви ввели невірний розмір");
         break;       
    }

    if (usSize) {
        alert(`Ваш український розмір одягу: ${usSize}`);
    } 
 } else if (sizeUk === "3") {
    let  outerwear = prompt("Введіть розмір (наприклад 8)")
    let usSize;

    switch (outerwear) {
        case '8':
            usSize = '21';
        break;
        case '8 1/2':
            usSize = '22';
        break;
        case '9':
            usSize = '23';
        break;
        case '9 1/2':
            usSize = '24';
        break;
        case '10':
            usSize = '25';
        break;
        case '10 1/2':
            usSize = '26';
        break;       
        case '11':
            usSize = '27';
        break;
        case '11 1/2':
            usSize = '28';
        break;
        default:
            alert("Ви ввели невірний розмір");
         break;       
    }

    if (usSize) {
        alert(`Ваш український розмір одягу: ${usSize}`);
    } 
 } else if (sizeUk === "4") {
    let  outerwear = prompt("Введіть зріст дитини (наприклад 50)")
    let usSize;

    switch (outerwear) {
        case '50':
            usSize = '\nОбхват грудей-40 \nТалія-40 \nБедра-42 \nСпина-14,5';
        break;
        case '56':
            usSize = '\nОбхват грудей-42 \nТалія-42 \nБедра-44 \nСпина-16';;
        break;
        case '62':
            usSize = '\nОбхват грудей-44 \nТалія-44 \nБедра-46 \nСпина-17,5';;
        break;
        case '68':
            usSize = '\nОбхват грудей-46 \nТалія-46 \nБедра-48 \nСпина-19';;
        break;
        case '74':
            usSize = '\nОбхват грудей-48 \nТалія-47 \nБедра-50 \nСпина-20,2';;
        break;
        case '80':
            usSize = '\nОбхват грудей-50 \nТалія-49 \nБедра-52 \nСпина-21,4';;
        break;       
        case '86':
            usSize = '\nОбхват грудей-51,5 \nТалія-50 \nБедра-54 \nСпина-22,6';;
        break;
        case '92':
            usSize = '\nОбхват грудей-53 \nТалія-51 \nБедра-56 \nСпина-23,8';;
        break;
        case '98':
            usSize = '\nОбхват грудей-55 \nТалія-52 \nБедра-58 \nСпина-25';;
        break;
        case '104':
            usSize = '\nОбхват грудей-57 \nТалія-53 \nБедра-60 \nСпина-26';;
        break;
        case '110':
            usSize = '\nОбхват грудей-59 \nТалія-54 \nБедра-62 \nСпина-27.4';;
        break;
        case '116':
            usSize = '\nОбхват грудей-61 \nТалія-55 \nБедра-64 \nСпина-28,6';;
        break;
        default:
            alert("Ви ввели невірний розмір");
         break;       
    }

    if (usSize) {
        alert(`Ваш український розмір одягу: ${usSize}`);
    } 
 }
   }

   if (taskSelection === "Ternary") {
    let answerToTheQuestion = confirm("Маєш гпрний настрій ?") ?"так" : "ні";
    console.log(answerToTheQuestion);
   }

   if (taskSelection === "Prompt: or") {
    let age = +prompt("Введіть ваш вік");
    let ageMess = age || age === Number.isInteger(age) ? `Ваш вік ${age}` : "не туди клацнув";
    alert(ageMess)
   }

   if (taskSelection === "Confirm: or this days") {
    let question = confirm("шопінг?") ;

    if (question === true) {
        alert("потьопали");
    }
    else {
        alert("ти - бяка");
    }
   }

   if (taskSelection === "Confirm: if this days") {
    let lastName = prompt("Введіть призвіще");
    let name = prompt("Введіть імя");
    let surname = prompt ("Введіть імя по батькові");
     if (!lastName) {
        lastName = "Забутько"
     }

     if (!name) {
        name = "Петро"
     }

     if (!surname) {
        surname = "Василькович"
     }
   alert(`${lastName} ${name} ${surname}`);
   }

   if (taskSelection === "Default: or") {
    let lastName = prompt("Введіть призвіще") || "Забутько";
    let name = prompt("Введіть імя") || "Петро";
    let surname = prompt ("Введіть імя по батькові") || "Василькович";
    alert(`${lastName} ${name} ${surname}`);
   }

   if (taskSelection === "Default: if") {
    let lastName = prompt("Введіть призвіще");
    let name = prompt("Введіть імя");
    let surname = prompt ("Введіть імя по батькові");
     if (!lastName) {
        lastName = "Забутько"
     }

     if (!name) {
        name = "Петро"
     }

     if (!surname) {
        surname = "Василькович"
     }
   alert(`${lastName} ${name} ${surname}`);
   }

   if (taskSelection === "Login and password") {
    let login = prompt("Введіть логін");

    if (login === "admin") {
        let password = prompt("Введіть пароль");

        if (password === "qwerty"){
            alert("Ласково просимо")
        }
        else {
            alert("Невірний пароль")
        }
    }
    else{
        alert("невірний логі")
    }
   }

   if (taskSelection === "Currency exchange") {
    let currency = prompt("Ведіть валюту (наприклад USD, EUR):").toUpperCase;
    let isBuying = confirm ("Будете купувати?")
    let rate 
     if (isBuying) {
       rate = currency === "USD" ? 27.5 : (currency === "EUR" ? 32 : 1)
     } else {
       rate = currency === "USD" ? 26.5 : (currency === "EUR" ? 30 : 1)
     }
   let amount = prompt ("Введіть суму:");
   var result = isBuying ? amount * rate : amount / rate;
   alert("Результат обміну: " + result.toFixed(2) + " " + currency);
   }
  
   if (taskSelection === "Scissors") {
    let user = prompt("Оберіть та введіть: камінь, ножиці чи папір: ").toLowerCase();

    let computer = Math.random() 
    if (computer < 0.3){
        computer = "камінь"
    } else if (computer < 0.6) {
        computer = "ножиці"
    } else {
        computer = "папір"
    }

    alert("Комп'ютер обрав: " + computer);

    let result
    if (user === computer) {
        result = "нічія"
    } else if (
        (user === "камінь" && computer === "ножиці") ||
        (user === "ножиці" && computer === "папір")  ||
        (user === "папір" &&  computer === "камінь")
    ) {
        result = "Ви переможець";
    } else {
        result = "лузер!";
    }
    alert(result);
   }
     
}