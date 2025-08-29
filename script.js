// part 1
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
    button.addEventListener('click', function () {
        if (coins < 20) {
            alert("Not enough coins! at lest 20 coins to call");
            return;
        }

        coins -= 20;
        coinDisplay.innerText = coins;

        const now = new Date();
        const timeString = now.toLocaleTimeString();

        const service = this.getAttribute('data-service');
        const number = this.getAttribute('data-number');

        alert("Calling " + service + " : " + number);

        const li = document.createElement('li');
        li.className =
            "p-5 rounded-xl shadow bg-gray-200 flex flex-end  items-center m-3";
        li.innerText = service + " - " + number + " (time: " + timeString + ')';
        history.appendChild(li);
    });
});

document.getElementById('btn-clear').addEventListener('click', function () {
    history.innerHTML = "";
    alert("History cleared!");
});

// part 3
let sumCopy = 0;
const navbarCopies = document.getElementById('navbar-copies')
const numberNine = document.getElementById('nineNumber');

document.getElementById('btn-copy1').addEventListener('click', function () {
    alert('copy number');
    sumCopy++;
    navbarCopies.innerText = sumCopy;
})
document.getElementById('btn-copy2').addEventListener('click', function () {
    alert('copy number');
    sumCopy++;
    navbarCopies.innerText = sumCopy;
})
document.getElementById('btn-copy3').addEventListener('click', function () {
    alert('copy number');
    sumCopy++;
    navbarCopies.innerText = sumCopy;
})
document.getElementById('btn-copy4').addEventListener('click', function () {
    alert('copy number');
    sumCopy++;
    navbarCopies.innerText = sumCopy;
})
document.getElementById('btn-copy5').addEventListener('click', function () {
    alert('copy number');
    sumCopy++;
    navbarCopies.innerText = sumCopy;
})
document.getElementById('btn-copy6').addEventListener('click', function () {
    alert('copy number');
    sumCopy++;
    navbarCopies.innerText = sumCopy;
})
document.getElementById('btn-copy7').addEventListener('click', function () 
{
    alert('copy number'); 
    sumCopy++;
    navbarCopies.innerText = sumCopy;
})
document.getElementById('btn-copy8').addEventListener('click', function () {
    alert('copy number');
    sumCopy++;
    navbarCopies.innerText = sumCopy;
})
document.getElementById('btn-copy9').addEventListener('click', function () {
    alert('copy number');
    sumCopy++;
    navbarCopies.innerText = sumCopy;
})
// document.getElementById('heart-icon2').addEventListener('click', function () {
//     count++;
//     navbarHeares.innerText = count;
// });
// document.getElementById('heart-icon3').addEventListener('click', function () {
//     count++;
//     navbarHeares.innerText = count;
// });

// document.getElementById('heart-icon4').addEventListener('click', function () {
//     count++;
//     navbarHeares.innerText = count;
// }); document.getElementById('heart-icon5').addEventListener('click', function () {
//     count++;
//     navbarHeares.innerText = count;
// });

// document.getElementById('heart-icon6').addEventListener('click', function () {
//     count++;
//     navbarHeares.innerText = count;
// }); document.getElementById('heart-icon7').addEventListener('click', function () {
//     count++;
//     navbarHeares.innerText = count;
// });

// document.getElementById('heart-icon8').addEventListener('click', function () {
//     count++;
//     navbarHeares.innerText = count;
// });
// document.getElementById('heart-icon9').addEventListener('click', function () {
//     count++;
//     navbarHeares.innerText = count;
// });
