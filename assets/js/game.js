//window.alert("this is an alert! JavaScript is running!");
//
// This creates a function named "fight"
//
//var playerName = window.prompt("What is your robot's name?");
//
// Note the lack of quotation marks around playerName
//
//window.alert(playerName);
//console.log(playerName);
//
//console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
//console.log(10 + 10);
// what is this?
//console.log("Our robot's name is " + playerName);
//
//function fight() {
//    window.alert("The Fight Has Begun!")
//}

//fight();
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
    // check to see if the value of the playerHealth variable is greater than 0
    if (playerHealth > 0) {
        console.log("Your player is still alive");
    }
var playerAttack = 10;
    if (playerHealth === 0) {
        console.log("This will not run.");
    }
    else {
        console.log("This will run instead.");
    }
    var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

//var enemyName = ["Roborto, Amy Android, Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//var enemy1 = "Roborto";
//var enemy2 = "Amy Android";
//var enemy3 = "Robo Trumble";

// Array fo Enemy Robot Names
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//console.log(enemyName[0]);
//console.log(enemyName[1]);
//console.log(enemyName[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index ");
}

// create function
var fight = function () {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If you (ture), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney -2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight()
    }
    // IF Player didn't choose betweeen 1 or 2 in the prompt 
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }  //end of Fight Funtion

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    //console.log(
    //    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
    //)
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // put new code under this
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } 
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // put new code under this
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } 
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
};
  // execute function
//var fight = function(enemyName) {
//  ... // fight function statements
//}
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
// Game States
// "Win" - Player robot has defeated all enemy-robots
//   * Fight all enemy-robots
//   * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less

