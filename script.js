
let value1 = document.getElementById("value1")
let value2 = document.getElementById("value2")
let value3 = document.getElementById("value3")
let op = 0
var boxOne = document.getElementsByClassName('box')[0]
let values = [
    "😃","⏰ ","⚓ ","🚗","🎈","🏀 ","🍺 ","💎","🧩"
]

let winners = [
    "You Lucky duck!!",
    "You won it man!!",
    "We have a winner here!!",
    "What did you have for lunch? Some Good luck !!!",
    "The one is a million is here!!"
]
let almost = [
    "Ohhh it was close man",
    "You'll get it, just one slot away!!",
    "Dont loose hope its just one slot!!",
    "Just a lttime more of luck and you'll win!!",
    "Just a little more, almost there!!"
]
let lost = [
    "hard luck",
    "Sorry",
    "tough noogies",
    "hard lines",
    "bad luck",
    "nevermind",
    "hard cheese",
    "tough luck",
    "stiff cheddar",
    "Cmon you can do better than that"
]


function getRandomValue(){
    m = Math.floor(Math.random()*9)
    return values[m]
}
function getWinnerValue(){
    m = Math.floor(Math.random()*5)
    return winners[m]
}
function getLostValue(){
    m = Math.floor(Math.random()*9)
    return lost[m]
}
function getAlmostValue(){
    m = Math.floor(Math.random()*5)
    return almost[m]
}

document.getElementsByClassName('toggleButton')[0].onclick = function() {
    if(this.innerHTML === 'Play') 
    { 
      value1.classList.add('animations');
      value2.classList.add('animations');
      value3.classList.add('animations');
      var myVar = setInterval(myTimer, 150);
      setTimeout(() => {
        
        document.getElementById("playbutton").innerHTML="Play"
        value1.classList.remove('animations');
        value2.classList.remove('animations');
        value3.classList.remove('animations');
        if (value1.innerText == value2.innerText) {
            if(value1.innerText == value3.innerText){
                console.log("Winner")
                op = 3
                console.log(value1, value2, value3)
                AnimationEffect
            }
            else{
                op = 2
                console.log("Almost!!!")
            }
        }
        else if (value1.innerText == value3.innerText){
            console.log("Almost!!!")
            op = 2
        }
        else if (value2.innerText == value3.innerText){
            console.log("Almost!!!")
            op = 2
        }
        else{
            op = 1
            console.log("Better luck next time")
        }

    }, 4000);
    setTimeout(() => {
        clearInterval(myVar)
    }, 3400);
    }
    setTimeout(() => {
        console.log(op)
        if(op == 3){
            window.alert(getWinnerValue())
        }
        else if(op == 2){
            window.alert(getAlmostValue())
        }
        else{
            window.alert(getLostValue())
        }
    }, 4050);
  }



function myTimer(){
    value1.innerText = getRandomValue()
    value2.innerText = getRandomValue()
    value3.innerText = getRandomValue()
}

