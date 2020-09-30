const classMatesNames = [
    "Mahdi Ahmadi",
    "Mouayad Alhhariri",
    "Marcus Andersson",
    "Gustav Andreasson",
    "Daniel Astersund",
    "Ivar Back",
    "Edwin Bryfors",
    "Milton Carlsson",
    "Danjel Dami",
    "Linus Ekelund",
    "Simon Fatty",
    "Hakan Gundogdu",
    "Albin Hakanson",
    "Samira Jimale",
    "David Kabayel",
    "Sebastian Kadfors",
    "lox Lar",
    "Max Magnusson",
    "Rand Mohammed",
    "Elis Norin",
    "Lins Ronnblad",
    "Maseh Sultani",
    "Rasmus Wendel",
    "Lucas Wennberg",
    "Matteus Westman"
]

const olElement = document.getElementById('print');

for (let i = 0; i < classMatesNames.length; ++i) {
    let ol = document.createElement('a');
    let names = classMatesNames[i].toLocaleLowerCase().slice(0).split(/ +/g);
    let firstNames = names[0].slice(0, 3);
    let lastNames = names[1].slice(0, 3);
    ol.setAttribute('href', `https://${lastNames}${firstNames}.kronhus.tk`);
    ol.setAttribute('class', 'links');
    ol.setAttribute('target', '_blank');
    ol.innerHTML = `<br/>${lastNames}${firstNames}.kronhus.tk<br/>`;
    olElement.appendChild(ol);
}