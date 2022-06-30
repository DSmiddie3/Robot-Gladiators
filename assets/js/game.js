// Function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.florr(Math.random() * (max -min +1) + min);

    return value;
};

// Player Info
//var playerName = window.prompt("What is your robot's name?");
//var playerHealth = 100;
    // check to see if the value of the playerHealth variable is greater than 0
    //if (playerHealth > 0) {
        //console.log("Your player is still alive");
    //}
//var playerAttack = 10;
    //if (playerHealth === 0) {
        //console.log("This will not run.");
    //}
    //else {
        //console.log("This will run instead.");
    //}
//var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

//var enemyName = ["Roborto, Amy Android, Robo Trumble"];
// Array fo Enemy Robot Names
//var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//var enemyHealth = 50;
//var enemyAttack = 12;

//var enemy1 = "Roborto";
//var enemy2 = "Amy Android";
//var enemy3 = "Robo Trumble";

//console.log(enemyName[0]);
//console.log(enemyName[1]);
//console.log(enemyName[2]);
//console.log(enemyNames.length);
// create function
var fight = function(enemyName) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "Fight" or "SKIP" to choose.');
    
        if (promptFight === "skip" || promptFight === "SKIP") {
        
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If you (ture), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0, playerInfo.money -10);
            conscole.log("playerMoney", playerInfo.money);
            break;
            }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        //enemyHealth = randomNumber;
        //console.log(
        //    playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        // Geneate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
    
    // check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // remove player's health by subtracting the amount set in the enemyAttack variable
    //playerHealth = Math.max(0,playerHealth - enemyAttack);
    //    console.log(
    //     enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);

    console.log(
        enemy.name + 'Attacked' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );
        
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }  
        else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
        // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    }  // End of While Loop
} // End of Fight

// funtion to start a new game
var startGame = function() {
    // Reset Player stats
    playerInfo.reset();
    //playerHealth = 130;
    //playerAttack = 15;
    //playerMoney = 20;
// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
  
      // reset enemyHealth before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);
  
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyObj);

      // IF we're not at the last enemy in the array
      //if (i < enemyNames.lenght - 1) {
      //  shop();
      //}
      //IF we.re not at the last enemy in the array
      //if (i < enemyNames.length - 1) {
      //  shop();
      //}
      // IF player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // Ask if the player wants to use the store beofre next round
        var storeConfirm = window.confirm("The fight is over, do you want to visit the store before the next round?");

        // IF Yes, take them to the store() function
        if (storeConfirm) {
        shop();
      }
    }
    }
    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
  // Play Again
  //startGame();
  // After the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
  
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');
    } else {
      window.alert("You've lost your robot in battle!");
    }
  
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm('Would you like to play again?');
  
    if (playAgainConfirm) {
      startGame();
    } else {
      window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
  };
// Going to the Shop for repairs.
var shop = function() {
    //console.log("entered the shop");
    // Ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // Use Switch to carry out acction
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            // Increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            // Increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("you don't have enough money!");
            }

            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the Shop");

            // Do Nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // Call Shop() again to force player to pick a valid option
            shop();
            break;
    }
};

// Player Data
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    },
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    }
  };
// Enemy Data
var enemyInfo = [
    {
      name: 'Roborto',
      attack: randomNumber(10, 14)
    },
    {
      name: 'Amy Android',
      attack: randomNumber(10, 14)
    },
    {
      name: 'Robo Trumble',
      attack: randomNumber(10, 14)
    }
  ];
  
  console.log(enemyInfo);
  console.log(enemyInfo[0]);
  console.log(enemyInfo[0].name);
  console.log(enemyInfo[0]['attack']);
    
// start the game when the page loads
startGame(); 
// function to end the entire game


  // execute function
//var fight = function(enemyName) {
//  ... // fight function statements
//}

// Game States
// "Win" - Player robot has defeated all enemy-robots
//   * Fight all enemy-robots
//   * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or Less.
//              

