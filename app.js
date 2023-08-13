let wickets = 0
let runs = 0
let overs = 0
let balls = 0
let totalBalls = 0
let Runs = []
let currentInning = 1;

document.addEventListener('DOMContentLoaded', () => {
    let wicketButton = document.getElementById('wicketButton')
    wicketButton.addEventListener('click', Wicket);

    let oneButton = document.getElementById('oneButton')
    oneButton.addEventListener('click', One);

    let zeroButton = document.getElementById('zeroButton')
    zeroButton.addEventListener('click', Zero)

    let twoButton = document.getElementById('twoButton')
    twoButton.addEventListener('click', Two)

    let threeButton = document.getElementById('threeButton')
    threeButton.addEventListener('click', Three)

    let fourButton = document.getElementById('fourButton')
    fourButton.addEventListener('click', Four)

    let sixButton = document.getElementById('sixButton')
    sixButton.addEventListener('click', Six)

    let declareButton = document.getElementById('declareButton')
    declareButton.addEventListener('click', Declare)

    let wideButton = document.getElementById('wideButton')
    wideButton.addEventListener('click', Wide)

    let byeButton = document.getElementById('byeButton')
    byeButton.addEventListener('click', Bye)

    let legByeButton = document.getElementById('legByeButton')
    legByeButton.addEventListener('click', LegBye)

    let noBallButton = document.getElementById('noBallButton')
    noBallButton.addEventListener('click', NoBall)
})

const Wicket = () => {
    enable()
    document.getElementById('wicketButton').value="Wicket"
    if(wickets<10){
        wickets = wickets + 1
        balls = balls + 1
        totalBalls = totalBalls + 1
        toBePrinted()
    }
    else{
        wickets = 0
        runs = 0
        balls = 0
        overs = 0
        totalBalls = 0
    }
}

const One = () => {
    enable()
    runs = runs + 1
    balls = balls + 1
    totalBalls = totalBalls + 1
    toBePrinted()
}

const Zero = () => {
    enable()
    balls = balls + 1
    totalBalls = totalBalls + 1
    toBePrinted()
}

const Two= () => {
    enable()
    runs = runs + 2
    balls = balls + 1
    totalBalls = totalBalls + 1
    toBePrinted()
}

const Three = () => {
    enable()
    runs = runs + 3
    balls = balls + 1
    totalBalls = totalBalls + 1
    toBePrinted()
}

const Four = () => {
    enable()
    runs = runs + 4
    balls = balls + 1
    totalBalls = totalBalls + 1
    toBePrinted()
}

const Six = () => {
    enable()
    runs = runs + 6
    balls = balls + 1
    totalBalls = totalBalls + 1
    toBePrinted()
}

const Wide = () => {
    enable()
    document.getElementById('declareButton').disabled = true
    document.getElementById('byeButton').disabled = true
    document.getElementById('legByeButton').disabled = true
    document.getElementById('noBallButton').disabled = true
    runs = runs + 1
    balls = balls - 1
    totalBalls = totalBalls - 1
    document.getElementById('runs').innerHTML=runs;
}

const Bye = () => {
    enable()
    document.getElementById('legByeButton').disabled = true
    document.getElementById('noBallButton').disabled = true
    document.getElementById('declareButton').disabled = true
    document.getElementById('wicketButton').disabled = true
    document.getElementById('wideButton').disabled = true
}

const LegBye = () => {
    enable()
    document.getElementById('byeButton').disabled = true
    document.getElementById('noBallButton').disabled = true
    document.getElementById('declareButton').disabled = true
    document.getElementById('wicketButton').disabled = true
    document.getElementById('wideButton').disabled = true
}

const NoBall = () => {
    enable()
    document.getElementById('declareButton').disabled = true
    runs = runs + 1
    balls = balls - 1
    totalBalls = totalBalls - 1
    document.getElementById('runs').innerHTML=runs;
    document.getElementById('wicketButton').value="Runout"
}

const toBePrinted = () => {
        IncreaseOvers()
        MaxOvers()
        document.getElementById('wicket').innerHTML = wickets;
        document.getElementById('runs').innerHTML = runs;
        document.getElementById('overs').innerHTML = overs;
        document.getElementById('balls').innerHTML = balls;
        if(totalBalls === 0){
            document.getElementById('runRate').innerHTML = 0;
        }
        else{
            document.getElementById('runRate').innerHTML = ((runs/totalBalls)*6).toFixed(2);
        }
        WinRuns();
}

const IncreaseOvers = () => {
    if(balls === 6){
        overs = overs + 1
        balls=0
    }
}

const MaxOvers = () => {
    if(overs == 5){
        Declare()
    }
}

const WinRuns = () => {
    if(currentInning === 2 && Runs[0] < runs){
        Declare()
    }
}

const Declare = () => {
    enable();

    if (currentInning === 1) {
        currentInning = 2;
    } else {
        Runs.push(runs)
        const winner = calculateWinner();
    }
    wickets = 0;
    Runs.push(runs)
    runs = 0;
    balls = 0;
    overs = 0;
    totalBalls = 0;

    toBePrinted();
}

const calculateWinner = () => {
    const team1Runs = Runs[0]
    const team2Runs = Runs[1]
    let winner = "";

    if (team1Runs > team2Runs) {
        winner =  "Team 1";
    } else if (team2Runs > team1Runs) {
        winner =  "Team 2";
    } else {
        winner =  "Match Tied";
    }
    currentInning = 1
    window.location.href = `winner.html?team=${winner}`;
    // alert(`The winner is ${winner}`);
}

const enable = () => {
    document.getElementById('wicketButton').disabled = false
    document.getElementById('declareButton').disabled = false
    document.getElementById('byeButton').disabled = false
    document.getElementById('legByeButton').disabled = false
    document.getElementById('threeButton').disabled = false
    document.getElementById('fourButton').disabled = false
    document.getElementById('sixButton').disabled = false
    document.getElementById('wideButton').disabled = false
    document.getElementById('zeroButton').disabled = false
    document.getElementById('oneButton').disabled = false
    document.getElementById('twoButton').disabled = false
    document.getElementById('threeButton').disabled = false
    document.getElementById('noBallButton').disabled = false
}
