const items = document.querySelectorAll('.countdown-item > h4');
const countdownElement = document.querySelector('.countdown')

let countdownDate = new Date(2022, 11, 18, 10, 0, 0).getTime();

function getCountdownTime() {
    const now = new Date().getTime();

    const distane = countdownDate - now

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distane / oneDay);
    let hours = Math.floor((distane % oneDay) / oneHour);
    let minute = Math.floor((distane % oneHour) / oneMinute);
    let seconds = Math.floor((distane % oneMinute) / 1000);

    const values = [days, hours, minute, seconds];

    items.forEach(function (item, index) {
        item.textContent = values[index]
    });

    if (distane < 0) {
        clearInterval(countdown)
        countdownElement.innerHTML = "<h4 class ='expired'>Время вышло</h4>"
    }
}

let countdown = setInterval(getCountdownTime(), 1000);

getCountdownTime();