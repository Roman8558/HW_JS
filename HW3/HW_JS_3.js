{
    //String: greeting
    //Запитайте у користувача ім'я та привітайте його за допомогою alert.

    let name = prompt("Введіть своє ім'я");

    alert (`Привіт ${name}!`);
}

{
   //String: gopni4ek
   // Попросіть користувача ввести рядок через 'prompt'. Використовуючи 
   // split та join зробіть що б після будь-якої коми слід було слово блін, 

   let sentence = prompt("Введіть рядок");

   let splitSentence = sentence.split(",");

   let joinSentence = splitSentence.join(" блін, ");

   alert(joinSentence);
}

{
    //String: capitalize
    //Перетворіть рядок, введений користувачем, таким чином, щоб перша літера ставала великою, а решта - мале

    let letters = prompt("Введіть рядок з літер");

    let letterSlice = letters.slice(0,1); 

    let firstLetter = letterSlice.toUpperCase(); 

    let restLetters = letters.slice(2).toLowerCase();

    alert(`${firstLetter}${restLetters}`);

}

{
   // String: word count
   // Порахуйте кількість слів у рядку. Використовуйте розбиття за пробілами. 
   // Довжина масиву називається так само, як і довжина рядка.

   let words = prompt('Введіть кілька слів');

   let splitWords = words.split(" ");

   let wordСount = splitWords.length;

   alert (`${wordСount}`);
}

{
    //String: credentials
    //Запитайте у користувача ПІБ, використовуючи prompt тричі. Викиньте зайві пробiли, використовуючи .trim
    //Використовуючи String: capitalize зробіть так, щоб кожне слово у ПІБ було з великої літери, а решта - маленькі
    //Об'єднайте ці три рядки в один змінний fullName і виведіть кудись (alert, console.log). Не забудьте пробiли між словами

    let lastName = prompt('Ведіть призвіще').trim();
    let name = prompt("Введіть ім'я").trim();
    let surname = prompt("Введіть ім'я батькові").trim();

    let lastNameSlice = lastName.slice(0,1).toUpperCase();
    let lastNameSliseRest = lastName.slice(2).toLowerCase();
    let lastNameResult = lastNameSlice + lastNameSliseRest;

    let nameSlice = name.slice(0,1).toUpperCase();
    let nameRest = name.slice(2).toLowerCase();
    let nameResult = nameSlice + nameRest;

    let surnameSlice = surname.slice(0,1).toUpperCase();
    let surnameRest = surname.slice(2).toLowerCase();
    let surnameResult = surnameSlice + surnameRest;

    let fullName = `ПІБ: ${lastNameResult} ${nameResult} ${surnameResult}`;

    alert(fullName)
}

{

    //String: beer
    //Не використовуючи .replace замініть слово пиво у рядку на слово чай
    let str = "Було жарко. Василь пив пиво вприкуску з креветками"
 
    let strSlice = str.slice(0,str.indexOf("пиво"));
    let strSliceRest = str.slice(str.indexOf("пиво")+"пиво".length);
    let result = `${strSlice} чай ${strSliceRest}`;
     

    console.log(result) //"Було жарко. Василь пив чай уприкуску з креветками"
}

{

    //String: big tag
    // На основі попереднього завдання зробіть тег великими літерами. replace, split і join не 
    //використовуйте, натомість використовуйте indexOf і slice,

    let str = "якийсь текст у якому є один тег <br /> і всяке інше"
   
    let strSlice = str.slice(0,str.indexOf("<br />"));
    let strSliceRest = str.slice(str.indexOf("<br />")+"<br />".length);
    let result =  `${strSlice}<BR />${strSliceRest}`;
    console.log(result) //якийсь текст, в якому є один тег <BR /> і всяке інше
}

{
    //String: new line
    //Попросіть користувача ввести рядок черезprompt. prompt не дозволяє вводити рядкові рядки. 
    //Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
    //Використовуючи split та join зробіть цей рядок воістину багаторядковим і виведіть в консоль або через alert.

    let str = prompt("Введіть рядок");
    let strSplit = str.split("\\n");
    let strJoin = strSplit.join("\n");
    alert(strJoin);
}

{
    //String: youtube
    //Нехай користувач введе будь-який текст із посиланням на youtube. Використовуючи регулярний вираз вийміть із
    //посилання ідентифікатор видосу і створіть рядок із вбудованим блоком HTML. Додайте блок на сторінку.
    //1.оголосіть константу з регулярним виразом
    //2.використовуйте метод match, який поверне вам масив
    //3.вийміть із масиву елемент із ідентифікатором відео
    //4.вивчіть HTML код вбудовування відео на сторінку на youtube.
    //5.використовуючи інтерполяцію рядків, вклейте ідентифікатор відео в HTML код вбудовування відео
    //6.використовуючи document.write відправте отриманий рядок на сторінку.

    const regularExpression = /^(ht{2}ps\:\/\/w{3}\.youtube\.com\/watch\?v\=)(([\w-]+)([\w-=&#]+))/;

    let linkYouTube = prompt("Введіть посилання на відео");
    
    let searchV = linkYouTube.match(regularExpression);

    const video = searchV[1];

    const link = `https://www.youtube.com/embed/${video}`;

    const width = 600;
    const height = 600;

    const result = `<iframe width="${width}" height="${height}"src="${link}"></iframe>`;

   document.write(result);


}