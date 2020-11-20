let clickMe = document.querySelector("#clickMe");
let display = document.querySelector("#display");

clickMe.addEventListener("click", () => {
    let textArea = document.getElementById("textArea").value;
    document.getElementById("textArea").innerHTML = textArea;
    
    display.innerHTML = filterWords(textArea).length;
});

function filterWords(body) {
    return body.split(/ |-/gm).join(" ");
}