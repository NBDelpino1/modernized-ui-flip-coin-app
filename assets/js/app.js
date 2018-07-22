var heads = 0;
var tails = 0;
var flips = heads + tails;
var sound = document.getElementById("flip");
var sound2 = document.getElementById("reset");

// Onclick handler located in HTML

function coinToss (){

    //toggle reset button

    // document.getElementById("reset-btn").src ="assets/images/reset-button-out.svg";

    //toggle coin

    document.getElementById("static-coin").style.display = 'none';
    document.getElementById("coin").style.display = 'none';
    document.getElementById("flipping-coin").style.display = 'inline';

    //play sound

    sound.play();

    //delay actions to coincide with audio ending

    setTimeout(function(){

        //toggle coin

        document.getElementById("flipping-coin").style.display = 'none';

        //toggle coin

        document.getElementById("coin").style.display = 'inline';

        //toggle button

        // document.getElementById("button").src ="assets/images/main-button-out.svg";

        //calculate then display result - matching coin and count

        if(Math.random() > .5){
            document.getElementById("coin").src = "assets/images/heads.png";//place heads coin image path here
            heads ++;
            flips ++;
            document.getElementById("heads").innerHTML = heads;
            document.getElementById("total-flips").innerHTML = flips;
        }
        else {
            document.getElementById("coin").src ="assets/images/tails.png";//place tails coin image path here
            tails ++;
            flips ++;
            document.getElementById("tails").innerHTML = tails;
            document.getElementById("total-flips").innerHTML = flips;
        }
    }, 1000);

    //toggle button

     // document.getElementById("button").src ="assets/images/main-button-in.svg";

}

//restart everything - Click handler located in HTML

function restart(){
    document.location.href = "";
    sound2.play();
}

















