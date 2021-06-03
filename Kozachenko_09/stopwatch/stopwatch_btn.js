// finding buttons
startBtn = document.getElementById("startBtn");
stopBtn = document.getElementById("stopBtn");

// add listeners
startBtn.addEventListener("click", startInterval);
stopBtn.addEventListener("click", stopInterval);

startBtn.addEventListener("click", startBtnDisable);
stopBtn.addEventListener("click", stopBtnDisable);

// declare variables
let startTime;


// functions
function startInterval() {
    startTime = setInterval(timer, 1000);
};

function stopInterval() {
    clearInterval(startTime);
};

function startBtnDisable() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
};
function stopBtnDisable() {
    startBtn.disabled = false;
    stopBtn.disabled = true;

};