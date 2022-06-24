const $startBtn = document.querySelector('#start-btn');
const $stopBtn = document.querySelector('#stop-btn');
const $resetBtn = document.querySelector('#reset-btn');

const $seconds = document.querySelector('#seconds');
const $minutes = document.querySelector('#minutes');

let intervalId;

let seconds = 0;
let minutes = 0;

$startBtn.addEventListener('click', startStopwatch)
$stopBtn.addEventListener('click', stopStopwatch)
$resetBtn.addEventListener('click', resetStopwatch)

function formatDigits(number) {
    return number < 10 ? '0' + number : number;
}

function startStopwatch() {
    intervalId = setInterval(function() {
        $seconds.innerText = formatDigits(seconds);
        seconds++;

        if(seconds > 59) {
            minutes++;
            seconds = 0;
        }
        $seconds.innerText = formatDigits(seconds);
        $minutes.innerText = formatDigits(minutes);
    }, 1000);
}

function stopStopwatch() {
    if(intervalId) {
        clearInterval(intervalId)
    }
}

function resetStopwatch() {
    seconds = 0;
    minutes = 0;
    $seconds.innerText = '00';
    $minutes.innerText = '00';
}