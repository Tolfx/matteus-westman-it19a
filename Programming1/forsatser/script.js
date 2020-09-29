const DOM_jammna = document.querySelector('.jamna');
const DOM_udda = document.querySelector('.udda');
const DOM_klasser = document.querySelector('.klasser');

const klasser = ["Svenska", "Engelska", "Prog", "Nätvker", "dawdasa"];

for(let i = 0; i < 50; ++i) {
    DOM_udda.innerHTML += `${2*i+1}, `
    DOM_jammna.innerHTML += `${2*i}, `
}

for(let x = 0; x < klasser.length; x++) {
    DOM_klasser.innerHTML += `<br/>${x+1}. ${klasser[x]}`
}