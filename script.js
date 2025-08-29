
let count = 0;
const navbarHeares = document.getElementById('navbar-heart-icon');

document.getElementById('heart-icon1').addEventListener('click', function () {
    count++;
    navbarHeares.innerText = count;
});

document.getElementById('heart-icon2').addEventListener('click', function () {
    count++;
    navbarHeares.innerText = count;
});
document.getElementById('heart-icon3').addEventListener('click', function () {
    count++;
    navbarHeares.innerText = count;
});

document.getElementById('heart-icon4').addEventListener('click', function () {
    count++;
    navbarHeares.innerText = count;
}); document.getElementById('heart-icon5').addEventListener('click', function () {
    count++;
    navbarHeares.innerText = count;
});

document.getElementById('heart-icon6').addEventListener('click', function () {
    count++;
    navbarHeares.innerText = count;
}); document.getElementById('heart-icon7').addEventListener('click', function () {
    count++;
    navbarHeares.innerText = count;
});

document.getElementById('heart-icon8').addEventListener('click', function () {
    count++;
    navbarHeares.innerText = count;
});
document.getElementById('heart-icon9').addEventListener('click', function () {
    count++;
    navbarHeares.innerText = count;
});


// part2


let coins = 100;
const coinDisplay = document.getElementById('coins');
const history = document.getElementById('history');
const callButtons = document.querySelectorAll('#btn-call'); 

callButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (coins < 20) {
      alert("Not enough coins! at lest 20 coins to call");
      return;
    }

    coins -= 20;
    coinDisplay.innerText = coins;

    const service = this.getAttribute('data-service');
    const number = this.getAttribute('data-number');

    alert("Calling " + service + " : " + number);

    const li = document.createElement('li');
    li.innerText = service + " - " + number;
    history.appendChild(li);
  });
});

document.getElementById('btn-clear').addEventListener('click', function() {
  history.innerHTML = "";
  alert("History cleared!");
});
