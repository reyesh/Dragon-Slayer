var slaying = true;
var youHit = 0;
var totalDamage = 0 ;
var dragonHP = Math.floor(Math.random()*12+1);
var playerHP = Math.floor(Math.random()*12+1);

console.log("you came across a dragon!");
console.log("Your HP:"+playerHP+"  Dragon HP:"+dragonHP);

var printStatus = function(playerHP,DragonHP) {
    console.log("Your HP:"+playerHP+"  Dragon HP:"+dragonHP);
}

youHit = Math.floor(Math.random()*2);

while(slaying){

	wannaHit = confirm("Hit dragon, or run?!");

	if(wannaHit){

		youHit = Math.floor(Math.random()*2);
		dragonHit = Math.floor(Math.random()*2);

		if(youHit){
			var damageThisRound = Math.floor(Math.random()*5+1);
			dragonHP = dragonHP - damageThisRound;
			console.log("you hit the dragon with a "+damageThisRound+" Hit!!");
			printStatus(playerHP,dragonHP);

			if(dragonHP<=0){
				slaying=false;
				console.log("you slew the dragon!");
				alert("You Won!!!!");
				break;
			}

		}else{
			console.log("You missed!");
		}

		if(dragonHit){
            damageThisRound = Math.floor(Math.random()*5+1);
            playerHP = playerHP - damageThisRound;
            console.log("Dragon hit you with a "+damageThisRound+" Hit!!");
            printStatus(playerHP,dragonHP);
           if(playerHP<=0){
                slaying=false;
                console.log("Dragon slew the player!\nYou Lose!");
				alert("You Lost!!!!");
                break;
            }
		}else{
            console.log("Dragon tried to hit you and missed!");
        }



	}else{

        var youRun = Math.floor(Math.random()*12+1);

        if(!(youRun<=2)){

            var dragonDamage = Math.floor(Math.random()*5+1);
            playerHP = playerHP - dragonDamage;
            console.log("You cant run away! You got hit with "+dragonDamage+" HP!")
			alert("You got hit!!!!");
			printStatus(playerHP,dragonHP);
            slaying=true;

            if(playerHP<=0){
                slaying=false;
                console.log("Dragon slew the player!");
                alert("you lost!")
                break;
            }

        } else {
            console.log("you ran away!!!");
            slaying=false;
            break;
        }
	}
}
