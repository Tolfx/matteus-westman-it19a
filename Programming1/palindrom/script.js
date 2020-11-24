let button = document.querySelector("#submit");
let last = document.querySelector("#last");
let DOM_new = document.querySelector("#new");
let B_true = document.querySelector("#true");

button.addEventListener("click", () => {
    let input = document.querySelector("#input").value;
    
    let arrayString = input.toUpperCase().split("");
    let reversedString = input.toUpperCase().split("").reverse();
    let reversedStringNormal = input.split("").reverse();

    last.innerHTML = `Du har givit: ` + input;
    DOM_new.innerHTML = `Din text baklänges är: ` + reversedStringNormal.join("");

    for (let i = 0; i < reversedString.length; i++) {
        if (arrayString[i] === reversedString[i]) {
            if (i+1 === reversedString.length) {
                B_true.innerHTML = "Panidrom!"
                B_true.style.color = "green"
                break;
            }
        } else {
            B_true.innerHTML = "Ingen Panidrom!"
            B_true.style.color = "red"
            break;
        };
    };
});