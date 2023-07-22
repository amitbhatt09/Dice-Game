var randomNum1 = Math.floor(Math.random()*6)+1;

var diceImg = "dice"+randomNum1+".png";//png from dice1.png to dice6.png hurray

var randomImgSource = "images/"+diceImg;// images/dice(1-6).png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImgSource);

var randomNum2 = Math.floor(Math.random()*6)+1;

var randomImgSource2 = "images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

if(randomNum1 > randomNum2)
{
    document.querySelector("h1").innerHTML="🎉Player 1 Wins!!🎉"
}
else if(randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML="🎉Player 2 Wins!!🎉"
}
else{
    document.querySelector("h1").innerHTML ="It's a tie!"
}
//For audio
const audio = document.getElementById('myAudio');

const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', function() {
    if(audio.pause)
    {
        audio.play;
    }
    else
    {
        audio.pause;
    }
    // Use the location.reload() method to refresh the page
    location.reload();
});

