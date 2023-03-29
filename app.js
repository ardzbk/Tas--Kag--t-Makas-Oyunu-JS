let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".comp-score");
let info = document.querySelector(".info");
let rockChoise = document.querySelector(".rock")
let paperChoise = document.querySelector(".paper")
let scissorsChoise = document.querySelector(".scissors")
let startBtn = document.querySelector(".welcome-btn")
let userName = document.querySelector(".userName")
let gameUserName = document.querySelector(".user");
let round = document.querySelector(".round");
let firstScreen = document.querySelector(".all");
let gameScreen = document.querySelector(".game-screen")


let allRound = "";
let userChoiseInfo = "";
function getComputerChoice() {
    let randomcomp = ['t', 'k', 'm'];
    let random = Math.floor(Math.random() * 3);
    return compChoiseInfo = randomcomp[random];
}

startBtn.addEventListener("click", () => {
    let userNameInfo = userName.value;
    let roundInfo = round.value;
    allRound = roundInfo;
    gameUserName.innerText = userNameInfo;
    if (userNameInfo == "" || roundInfo == "") {
        alert("Lütfen bilgileri giriniz.")
    }
    else {
        firstScreen.classList.add("closeScreen");
        gameScreen.classList.add("closeScreenGame");
    }
})



function userChoise() {
    rockChoise.addEventListener("click", () => {
        Game("t");
    })

    paperChoise.addEventListener("click", () => {
        Game("k");
    })

    scissorsChoise.addEventListener("click", () => {
        Game("m");
    })
}
userChoise();

function Game(userChoiseInfo) {
    choise = userChoiseInfo + getComputerChoice();
    switch (choise) {
        case "tm":
        case "kt":
        case "mk":
            scoreBoard("win");
            break;
        case "tk":
        case "km":
        case "mt":
            scoreBoard("lose");
            break;
        case "tt":
        case "kk":
        case "mm":
            scoreBoard("draw");
            break;
    }
}

function scoreBoard(game) {
    if (game == "win") {
        info.innerText = "Kullanıcı kazandı..."
        var userText = parseInt(userScore.innerText);
        userText += 1;
        userScore.innerHTML = userText;
        if (userText == parseInt(allRound)) {
            alert("Tebrikler kazandınız..")
            firstScreen.classList.remove("closeScreen");
            gameScreen.classList.remove("closeScreenGame");
            userName.value = "";
            round.value = "";
        }
    }
    else if (game == "lose") {
        info.innerText = "Bilgisayar kazandı..."
        var copmText = parseInt(compScore.innerText);
        copmText += 1;
        compScore.innerHTML = copmText;
        if (copmText == parseInt(allRound)) {
            alert("Bilgisayar kazandı..")
            firstScreen.classList.remove("closeScreen");
            gameScreen.classList.remove("closeScreenGame");
            userName.value = "";
            round.value = "";
        }
    }
    else if (game == "Berabere...") {
        info.innerText = "It's a draw..."
    }
}



