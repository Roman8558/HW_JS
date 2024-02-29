{
    //Literals
    //Знайдіть кілька навколишніх об'єктів реального світу та створіть відповідні об'єкти Javascript. Наприклад:
    const cat = {
        species: "british shorthair",
        name: "Buska"
   }
}

{
    //Literals expand
    //Дайте можливість користувачеві додати будь-які дві властивості до цих об'єктів з будь-якими значеннями. 
    //Забезпечте введення назви ключа і значення через prompt прямо в літералі об'єкта {}
    const cat = {
        species: "british shorthair",
        name: "Buska",
        [prompt("Введіть всластивість")]:prompt("Введіть значення"),
        [prompt("Введіть всластивість")]:prompt("Введіть значення")
    }   
}

{
   // Literals copy
   // Нехай користувач введе ще одну властивість змінну. Вставте цю змінну в новий об'єкт. 
   //Скопіюйте об'єкт із попереднього завдання на новий об'єкт.

   const cat = {
    species: "british shorthair",
    name: "Buska",
    age:"3",
    [prompt("Введіть всластивість")]:prompt("Введіть значення")
    } 

    const dog = {
       ...cat
    }

   console.log(dog)
}

{
    //Html tree
    //<body>
    //<div>
        //<span>Enter a data please:</span><br/>
        //<input type='text' id='name'>
        //<input type='text' id='surname'>
    //</div>
    //<div>
        //<button id='ok'>OK</button>
        //<button id='cancel'>Cancel</button>
    //</div>
//</body>

//Зробіть декларативну JSON-структуру для тегів вище, у якій:
//кожен тэг буде об'єктом
//ім'я тега буде полем tagName
//Вкладені теги будуть у полі children
//Набір аттрибутів тега буде в полі attrs.
//Виведіть значення тексту в другій кнопці, використовуючи . та [].
//Виведіть значення атрибуту id у другому input, використовуючи . та [].

const body  = {
    tagName:"body",
    children: [
        {
            tagName:"div",
            children: [
                {
                tagName:"span",
                children:['Enter a data please:']
                },
                {
                    tagName:"br"
                },
                {
                    tagName:"input",
                    attrs: {
                        type:'text',
                        id:'name'
                    }
                },
                {
                    tagName:"input",
                    attrs:{
                        type:'text',
                        id:'surname'
                    }
                }
            ]
        },
        {
            tagName:"div",
            children: [
                {
                  tagName:"button",
                  children:['OK'],
                  attrs: {
                    id:'ok'
                    }
                },
                {
                    tagName:"button",
                    children:['Cancel'],
                    attrs:{
                        id:'cancel'
                    }
                }
           ]
        }
    ]

}

}

{
    //Parent
    //Додайте кожному об'єкту тега з попереднього завдання зв'язок з батьком, використовуючи властивість parent та присвоєння

    const body  = {
        tagName:"body",
        children: [
            {
                tagName:"div",
                children: [
                    {
                    tagName:"span",
                    children:['Enter a data please:']
                    },
                    {
                        tagName:"br"
                    },
                    {
                        tagName:"input",
                        attrs: {
                            type:'text',
                            id:'name'
                        }
                    },
                    {
                        tagName:"input",
                        attrs:{
                            type:'text',
                            id:'surname'
                        }
                    }
                ]
            },
            {
                tagName:"div",
                children: [
                    {
                      tagName:"button",
                      children:['OK'],
                      attrs: {
                        id:'ok'
                        }
                    },
                    {
                        tagName:"button",
                        children:['Cancel'],
                        attrs:{
                            id:'cancel'
                        }
                    }
               ]
            }
        ]
    
    }

    body.children[0].father = body
    body.children[1].father = body
    body.children[0].children[0].father = body.children[0]
    body.children[0].children[1].father = body.children[0]
    body.children[0].children[2].father = body.children[0]
    body.children[0].children[3].father = body.children[0]
    body.children[1].children[0].father = body.children[1]
    body.children[1].children[1].father = body.children[1]
}

{
    //Change OK
    //Додайте (або змініть) будь-який введений користувачем атрибут тега <button id='ok'> 
    //із завдання HTML Tree. Також користувач вводить значення цього атрибута.

    let attribute = prompt("Ведіть нову назву атрибуту");
    let value = prompt("Введіть значення");

    const body  = {
        tagName:"body",
        children: [
            {
                tagName:"div",
                children: [
                    {
                    tagName:"span",
                    children:['Enter a data please:']
                    },
                    {
                        tagName:"br"
                    },
                    {
                        tagName:"input",
                        attrs: {
                            type:'text',
                            id:'name'
                        }
                    },
                    {
                        tagName:"input",
                        attrs:{
                            type:'text',
                            id:'surname'
                        }
                    }
                ]
            },
            {
                tagName:"div",
                children: [
                    {
                      tagName:"button",
                      children:['OK'],
                      attrs: {
                        id:'ok'
                        }
                    },
                    {
                        tagName:"button",
                        children:['Cancel'],
                        attrs:{
                            id:'cancel'
                        }
                    }
               ]
            }
        ]
    
    }

    body.children[1].children[0].children[0] = attribute
    body.children[1].children[0].attrs.id = value
}

{
    //Destructure
    //Використовуючи деструктуризацію структури із завдання HTML Tree:
     //Виведіть значення тексту у тезі span,
     //Виведіть значення тексту в другій кнопці та
     //Виведіть значення атрибуту id у другому input.

     var body  = {
        tagName:"body",
        children: [
            {
                tagName:"div",
                children: [
                    {
                    tagName:"span",
                    children:['Enter a data please:']
                    },
                    {
                        tagName:"br"
                    },
                    {
                        tagName:"input",
                        attrs: {
                            type:'text',
                            id:'name'
                        }
                    },
                    {
                        tagName:"input",
                        attrs:{
                            type:'text',
                            id:'surname'
                        }
                    }
                ]
            },
            {
                tagName:"div",
                children: [
                    {
                      tagName:"button",
                      children:['OK'],
                      attrs: {
                        id:'ok'
                        }
                    },
                    {
                        tagName:"button",
                        children:['Cancel'],
                        attrs:{
                            id:'cancel'
                        }
                    }
               ]
            }
        ]
    
    }

 const {children:[{children:[{children: spanText}]}]} = body
 const {children:[{children:[,,,{attrs:{id :inputText}}]}]} = body
 const {children:[,{children:[,{children: buttonText}]}]} = body
 console.log(buttonText)
}

{
//    Destruct array
//    let arr = [1,2,3,4,5, "a", "b", "c"]
//    напишіть код, який використовуючи деструктуризацію покладе:
//    парні числа в змінні even1, even2,
//    непарні в odd1, odd2, odd3,
//    Літери в окремий масив

  let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

  let [odd1, even1, odd2, even2, odd3, ...letters] = arr

  console.log("Парні числа:", even1, even2);
  console.log("Непарні числа:", odd1, odd2, odd3);
  console.log("Букви:", letters);

}

{
 // Destruct string
 // let arr = [1, "abc"]
 // напишіть код, який використовуючи деструктуризацію покладе:
 // Число в змінну number
 // літеру a в змінну s1
 // літеру b у змінну s2
 // літеру c у змінну s3

   let arr = [1, "abc"];

   let [number,[s1,s2,s3] ] = arr;

   console.log("Число:", number);
   console.log("Літера a:", s1);
   console.log("Літера b:", s2);
   console.log("Літера c:", s3);
}

{
//    Destruct 2
//    вийміть використовуючи деструктуризацію імена дітей у змінні name1 та name2

  let obj = {
    name: 'Ivan',
    surname: 'Petrov',
    children: [{name: 'Maria'}, {name: 'Nikolay'}]
}
const {children:[{name:name1},{name:name2}]} = obj
}

{
//    Destruct 3
//    let arr = [1,2,3,4, 5,6,7,10]
//    вийміть використовуючи деструктуризацію об'єктів два перші елементи та довжину масиву в змінні a, b та length

let arr = [1,2,3,4, 5,6,7,10]

let {0:a,1:b,length} = arr;
console.log("a:", a);  
console.log("b:", b);        
console.log("length:", length);
}

{
//    Copy delete
//    Зробіть копію одного з об'єктів із завдання Literals без ключа, який введе користувач, з використанням 
//    деструктурiзацiї та rest, без використання оператору delete.
    const cat = {
    age  : prompt("введіть вік")
    }

    const { age, ...copiedCat } = cat;
    console.log(copiedCat)

}

{
    // Currency drop down 
    // Зробіть список, що випадає, з назвами всіх валют, використовуючи код з минулого завдання і накопичення 
    // HTML-тегів у рядковій змінній. Для списків, що випадають, в HTML передбачені теги <select> і <option>

// Запит на сервер для отримання даних про курси валют
fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const currencies = Object.keys(data.rates);

        let selectHtml = '<select id="currencySelect">';


        currencies.forEach(currency => {
            selectHtml += `<option value="${currency}">${currency}</option>`;
        });

        selectHtml += '</select>';

        document.body.innerHTML += selectHtml;

        const currencySelect = document.getElementById('currencySelect');
        currencySelect.addEventListener('change', function () {
 
            console.log('Обрана валюта:', this.value);
        });
    })
    .catch(error => {
        console.error('Помилка при отриманні даних:', error);
    });

}

{
    // Currency table
    // Зробіть двовимірну таблицю з курсами між усіма можливими парами 
    // валют на кшталт таблиці Піфагора, використовуючи код із завдання Currency real rate:
    
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const inputCurrency = prompt('Введіть вхідну валюту (наприклад, USD):');
        const targetCurrency = prompt('Введіть валюту для конвертації (наприклад, EUR):');
        const amount = parseFloat(prompt('Введіть суму у вхідній валюті:'));

        if (data.rates.hasOwnProperty(inputCurrency) && data.rates.hasOwnProperty(targetCurrency)) {
 
            const exchangeRate = data.rates[targetCurrency] / data.rates[inputCurrency];
            const result = amount * exchangeRate;

            console.log(`${amount} ${inputCurrency} дорівнює ${result.toFixed(2)} ${targetCurrency}`);
        } else {
            console.log('Невірна валюта. Перевірте введені дані.');
        }
    })
    .catch(error => {
        console.error('Помилка при отриманні даних:', error);
    });
}
{
 //   Form
 //   Напишіть код, який будь-якого об'єкта створює форму HTML. Наприклад для такого об'єкту
    const car = {
       Name:"chevrolet chevelle malibu",
       Cylinders:8,
       Displacement:307,
       Horsepower:130,
       Weight_in_lbs:3504,
       Origin:"USA",
       in_production: false
    }
    let form = "<form>\n<label>"

    for(let cars in car) {
        form += cars
        form += ': <input type="'
        if(typeof car[cars] === "number"){
            form += 'number" value="' + car[cars] + '"/> </label>\n<label>'
        }
        else if(typeof car[cars] === "string"){
            form += 'text" value="' + car[cars] + '"/> </label>\n<label>'
        }
        else if(typeof cat[cats] === "boolean"){
            form += 'checkbox" value="' + car[cars] + '"/> </label>\n<label>'
        }
    }
    form = form.substring(0, form.lastIndexOf('<label>'));
    form += "</form>"
    console.log(form)
    
    document.write(form)

}

{
   // Сформувати таблицю (використовуючи накопичення тегів HTML у рядку):
    //Перед безпосередньо формуванням рядків таблиці треба знати всі колонки. 
    //Для цього потрібно попередньо перебрати всі об'єкти та витягти з них усі ключі, щоб сформувати загальну множину ключів.
    //Перебираємо масив об'єктів, перебираємо ключі кожного об'єкта і додаємо в масив колонок, якщо цього ключа ще немає. 
    //Наприклад вище масив вийде у шість елементів. На цьому етапі рядок HTML створювати ще рано.
    //Починаємо створення таблиці. Використовуючи масив колонок формуємо один рядок таблиці із заголовками
    //Починаємо створення таблиці. Використовуючи масив колонок формуємо один рядок таблиці із заголовками

    const persons = [
        {
            name: 'Марія',
            fatherName: 'Іванівна',
            surname: 'Іванова',
            sex: 'female'
        },
        {
            name: 'Миколай',
            fatherName: 'Іванович',
            surname: 'Іванов',
            age: 15
        },
        {
            name: 'Петро',
            fatherName: 'Іванович',
            surname: 'Іванов',
            married: true
        },
]

}


