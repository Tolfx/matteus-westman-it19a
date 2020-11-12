let simpleString = "test ";
console.log(simpleString.repeat(10))

/**
 * @description My first name
 */
let fornamn = "Matteus";

/**
 * @description My last name
 */
let efternamn = "Westman";

/**
 * @description My address
 */
let adress = "Kalendervagen 23";

/**
 * @description My phone number
 */
let telefon = "0761822409";

/**
 * @description My age
 */
let alder = 18;

/**
 * @description My full name in different ways
 */
let fullname = `${fornamn} ${efternamn}` || 
                fornamn.concat(" " + efternamn) ||
                fornamn + " " + efternamn;

console.log(fullname)

/**
 * @description My information
 */
let description = `Namn: ${fornamn} ${efternamn} <br/> Ålder: ${alder} <br/> Adress: ${adress} <br/> Telefon: ${telefon}`

let jumper = document.querySelector(".jumbotron");

let div = document.createElement('div');

div.setAttribute('style', 'text-align: center; font-size: 20px;');

//Send out the message aka print it out
div.innerHTML = description;
//Append it
jumper.appendChild(div);