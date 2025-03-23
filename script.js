//loading
let loading = document.getElementById("loading");
let start = document.getElementById("start");
//main
let player = document.getElementById("player");
let game = document.getElementById("main");
let time = document.getElementById("time");
let kills = document.getElementById("kills");
let kills2 = document.getElementById("kills2");

//gameover
let gameover = document.getElementById("gameover");
let restart = document.getElementById("restart");

//sounds
let overS = document.getElementById("overS");
let gunS = document.getElementById("gunS");
let loadS = document.getElementById("loadS");
let zombieS = document.getElementById("zombieS");


main.addEventListener("click", () => {
    gunS.play();
})



//start
start.addEventListener("click", () => {
    loading.style.display = "none";
    game.style.display = "inline-block";
    loadS.pause();
})

//player
let playerX = 0;
let playerY = 0;
let kill = 0;
player.addEventListener("click", () => {
    kill += 1;
    kills.innerHTML = kill;
    kills2.innerHTML = kill;
    let X = Math.floor(Math.random() * 350);
    let Y = Math.floor(Math.random() * 590);
    player.style.left = X + "px";
    player.style.top = Y + "px";
    zombieS.play();
    zombieS.loop = true;
    if (X >= 350) {
        X = 350;
    }
    if (Y >= 590) {
        Y = 590;
    }
})
//time
let times = 30;

function timekill() {
    times--;
    time.innerHTML = times;
    if (times == 0) {
        gameover.style.display = "inline-block";
        game.style.display = "none";
        overS.play();
        zombieS.pause();
    }
}

// Function to check if loading is hidden
function checkLoading() {
    if (loading.style.display == "none") {
        setInterval(timekill, 1000);
    } else {
        setTimeout(checkLoading, 500); // Keep checking every 500ms
    }
}

// Start checking for loading display
setTimeout(checkLoading, 500);


//restart
restart.addEventListener("click", () => {
    gameover.style.display = "none";
    game.style.display = "none";
    loading.style.display = "inline-block";
    times = 30;
    kill = 0;
    kills.innerHTML = 0;
    kills2.innerHTML = 0;
    overS.pause();
    zombieS.pause();
    loadS.play();
})

