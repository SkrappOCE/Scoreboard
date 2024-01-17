let scoreBoard1 = document.getElementById("score-one");
let scoreBoard2 = document.getElementById("score-two")

let homePoints = 0
let guestPoints = 0

/* Home scoreboard*/
function btnPlus1Home() {
    homePoints += 1
    scoreBoard1.textContent = homePoints
}

function btnPlus2Home() {
    homePoints += 2
    scoreBoard1.textContent = homePoints
}

function btnPlus3Home() {
    homePoints += 3
    scoreBoard1.textContent = homePoints
}


/* Guest Scoreboard*/
function btnPlus1Guest() {
    guestPoints += 1
    scoreBoard2.textContent = guestPoints
}

function btnPlus2Guest() {
    guestPoints += 2
    scoreBoard2.textContent = guestPoints
}

function btnPlus3Guest() {
    guestPoints += 3
    scoreBoard2.textContent = guestPoints
}

/* Reset button */
function resetBtn() {
    homePoints = 0
    guestPoints = 0
    scoreBoard1.textContent = homePoints
    scoreBoard2.textContent = guestPoints
}