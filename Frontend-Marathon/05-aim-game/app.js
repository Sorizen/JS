const startGame = () => {
    timeEl.innerHTML = `00:${time}`;
    createRandomCircle();
    setInterval(() => {
        time = --time;
        if (time >= 10) {
            timeEl.innerHTML = `00:${time}`;
        } else if (time < 10 && time > 0) {
            timeEl.innerHTML = `00:0${time}`;
        } else if (time === 0) {
            timeEl.innerHTML = `00:00`;
            endGame();
        }
    }, 1000)
}
const getRandNum = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}
const endGame = () => {
    timeEl.parentNode.classList.add("hide");
    board.innerHTML = `<h1>Cчёт: <span class="primary">${counter}</span></h1>`;
}
const createRandomCircle = () => {
    const circle = document.createElement("div");
    let size = getRandNum(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandNum(0, width - size);
    const y = getRandNum(0, height - size);
    circle.classList.add("circle");
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.background = arrOfColors[getRandNum(0, arrOfColors.length - 1)];
    board.append(circle);
}
const start = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
const arrOfColors = ["#DC143C", "#2E8B57", "#9ACD32", "#FFC0CB", "#FF1493", "#FF4500", "#FFD700", "#FF00FF", "#0000FF", "#F0FFFF"];
let time = 0;
let counter = 0;

board.addEventListener("click", (event) => {
    if (event.target.classList.contains("circle")) {
        counter = counter + 1;
        event.target.remove();
        createRandomCircle();
    }
    console.log(counter)
})
timeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("time-btn")) {
        time = parseInt(event.target.getAttribute("data-time"));
        screens[1].classList.add('up');
        startGame();
    }
})
start.addEventListener("click", (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})