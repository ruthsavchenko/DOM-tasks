let startButton = document.createElement('button')
startButton.setAttribute('onclick', 'startTimer()');
startButton.innerHTML = 'Start'
document.body.prepend(startButton);

let stopButton = document.createElement('button')
stopButton.setAttribute('onclick', 'stopTimer()');
stopButton.innerHTML = 'Stop'
document.body.prepend(stopButton);

let timer = document.createElement('h2')
timer.setAttribute('id', 'timer');
document.body.prepend(timer);


function zero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function updateTimer() {
    let date = new Date()
    timer.innerHTML = date.getDate() + ":" + zero(date.getMinutes()) + ":" + zero(date.getSeconds())
    setInterval(timer, 1000)
}
updateTimer();

let timerСounter = setInterval(updateTimer, 1000)

function startTimer() {
    timerСounter = setInterval(updateTimer, 1000)
}

function stopTimer() {
    clearInterval(timerСounter);
}