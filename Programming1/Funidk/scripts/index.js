const clickMeButton = document.getElementById('clickme');
const discoButton = document.getElementById('disco');

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#"
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function changeStatus() {
  const SubmitButton = document.getElementById('status').value;
  document.getElementById('statusChanger').innerHTML = SubmitButton;
  console.log(`Changed status: ${SubmitButton}`);
}

/*

Event listeners

*/
discoButton.addEventListener('click', () => {
  setInterval(() => {
    document.body.style.background = getRandomColor();
  }, 100)
})

clickMeButton.addEventListener('click', () => {
    document.body.style.background = getRandomColor();
});