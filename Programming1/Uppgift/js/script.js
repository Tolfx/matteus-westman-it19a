// vars
const DOM_name = document.getElementById('name');
const DOM_age = document.getElementById('age');
const DOM_address = document.getElementById('address');
const DOM_postnummer = document.getElementById('postnummer');
const DOM_city = document.getElementById('city');
const DOM_phoneNumber = document.getElementById('phonenumber');

//Unorder classes
const ON_name = document.querySelectorAll('.name')

//Button for submit
const Button = document.getElementById('getInfo');
const PrintMe = document.getElementById('printMe')

let Name, Age, Address, Postnummer, City, Phonenumber;

const arrayLoopMe = []

Button.addEventListener('click', () => {
    Name = DOM_name.value;
    Age = DOM_age.value;
    Address = DOM_address.value;
    Postnummer = DOM_postnummer.value;
    City = DOM_city.value;
    Phonenumber = DOM_phoneNumber.value;
    console.log('All set!');
    arrayLoopMe.push(
        Name,
        Age,
        Address,
        Postnummer,
        City,
        Phonenumber
    )
});

PrintMe.addEventListener('click', () => {
    console.log(Name);
    const olElement = document.getElementById('print');
    for(let i = 0; i < arrayLoopMe.length; ++i) {
        console.log('loopyes?')
        let ol = document.createElement('ol')
        ol.innerHTML = arrayLoopMe[i];
        olElement.appendChild(ol);
    }
})