var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess = 0; // выбраная пользователем клетка:
var hits = 0; // чило попаданий;
var guesses = 0; // количество попыток;
var isSunk = false; // если корабль потоплен, то true;


while(isSunk == false){
	guess = prompt("Введите число (0-6) : ");
      if(guess <0 || guess > 6){
      		alert("Please enter a valid call numbe!");
      }else if{
      	guesses = guesses + 1;
      	if(guess == location1 || guess == location2 ||guess == location3){
 		alert("HIT");
  		hits = hits + 1;
  		if(hits == 3){
       	isSunk = true;
       	alert("battleship defferint");
       }else {
  			 	alert("miss");
  			 }
   		 }
    }  
}
var stats = "Your took" + guesses + "guesses to sink the battleship" + "wich means your shooting accuracy was" + (3/guesses);
alert(stats);