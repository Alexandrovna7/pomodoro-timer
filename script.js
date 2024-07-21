
    const start = document.querySelector("#start");
    const time = document.querySelector('#pomodoro-time')
    
    let timerId = setInterval(() => {
        time--;
        return time;
    }, 1000);

    start.addEventListener('click', function () {
        start.textContent = "stop";
    });
