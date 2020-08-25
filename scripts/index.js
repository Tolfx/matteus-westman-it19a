const clickMeButton = document.getElementById('clickme');

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#"
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

clickMeButton.addEventListener('click', () => {
    document.body.style.background = getRandomColor();
})