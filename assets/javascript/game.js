let totalScore = 0;

let scoreToBeat = 0;
let wins = 0;
let loses = 0;
let randNum;
let gemValues;

//random number function
function randNumber(num1, num2) {
    return Math.floor((Math.random() * num1) + num2);
}

//start
function start() {
    
    randNum = randNumber(150, 20);
    $("#score-to-beat").text(randNum);
    let emeraldNum = randNumber(15, 1);
    let rubyNum = randNumber(15, 1);
    let diamondNum = randNumber(15, 1);
    let gemNum = randNumber(15, 1);
    totalScore = 0;
    $("#total"). text(totalScore);
    return [emeraldNum, rubyNum, diamondNum, gemNum]
}

//crystals totals
$(".crystals").on("click", function() {
    if ($(this).is("#img-emerald")) {
        totalScore += gemValues[0];
    }else if ($(this).is("#img-ruby")) {
        totalScore += gemValues[1];
    }else if ($(this).is("#img-diamond")) {
        totalScore += gemValues[2];
    }else if ($(this).is("#img-gem")) {
        totalScore += gemValues[3];
    }

    $("#total").text(totalScore);
    //console.log(totalScore)

    if(totalScore === randNum) {
        wins++;
        $("#win-counter").text(wins);
        gemValues = start();
    }else if (totalScore > randNum) {
        loses++;
        $("#loss-counter").text(loses);
        gemValues = start()
    }
});
 gemValues = start();
