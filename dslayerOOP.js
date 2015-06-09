var aCharacter = function(type) {
	var obj = { type: type,
              hp: Math.floor(Math.random()*12+1),
              exp: 0 };

  $.extend(obj, aCharacter.methods);
	return obj;
};

aCharacter.methods = {
  setHP: function(hp) {
    this.hp = hp;
  },
	hitDamage: function() {
		return Math.floor(Math.random()*5+1);
	},
  shouldHit: function() {
    return Math.floor(Math.random()*2);
  },
	shouldRun: function() {
		return Math.floor(Math.random()*2);
	},
  printStatus: function(){
		//$("#gameStatus").append("<p>" + this.type + " hp:" + this.hp + "</p>");
		printMsg(this.type + "hp: " + this.hp);
		scrollDown();
		//return status of character
		if(this.hp<=0){ gameOver(); }
  }
}
//print game status message and scroll down

function scrollDown(){
	var box = document.getElementById('gameStatus');
	box.scrollTop = box.scrollHeight;
}

function printMsg(msg, actionRow){
	$("#gameStatus").append("<p class=" + '"gameStatusMsg ' + actionRow + '">' + msg + "</p>");
	scrollDown();
}

function gameOver(){
	printMsg("Game Over");
	$("#run").prop('disabled', true);
	$("#hit").prop('disabled', true);
}

var dragonHP1 = aCharacter("dragon");
var playerHP1 = aCharacter("player");

playerHP1.printStatus();
dragonHP1.printStatus();

var slaying = true;
var run;
var input;

$( "#run" ).click(function() {
	printMsg("you want to run", "actionRow");
	fight(false)
});

$( "#hit" ).click(function() {
	printMsg("you want to hit", "actionRow");
	fight(true);
});

printMsg("you came across a dragon!");

function fight(wannaHit) {
	//wannaHit = confirm("Hit dragon, or run?!");
	// the hit process
	if(wannaHit){
		if(playerHP1.shouldHit()){
			//attack
			printMsg("you hit dragon");
			dragonHP1.setHP(dragonHP1.hp - playerHP1.hitDamage());
			playerHP1.printStatus();
			slaying = dragonHP1.printStatus();
		}else{
			printMsg("you missed, dragon's turn");
			//see if the dragon could hit you
			if(dragonHP1.shouldHit()){
				printMsg("dragon hit you!");
				playerHP1.setHP(playerHP1.hp - dragonHP1.hitDamage());
				dragonHP1.printStatus();
				slaying = playerHP1.printStatus();
			}else{
				printMsg("dragon tried to hit and missed!");
			}
		}
	}else{
		// so you decided to run
		printMsg("run!");
		if(playerHP1.shouldRun()){
			slaying = 0;
			printMsg("you ran away!");
			gameOver();
		}else{

			//see if the dragon could hit you
			if(dragonHP1.shouldHit()){
				printMsg("not so fast, dragon hit you!");
				playerHP1.setHP(playerHP1.hp - dragonHP1.hitDamage());
				dragonHP1.printStatus();
				slaying = playerHP1.printStatus();
			}else{
				printMsg("dragon tried to hit and missed!");
			}
		}
	}
	return slaying;
}
