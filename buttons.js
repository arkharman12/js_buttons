/**********
TITLE: Buttons
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Buttons Lab
ORIGINALLY CREATED ON: 6 March 2019
LAST MODIFIED ON: 6 March 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function(){
    var btn1Handler = document.getElementById("btn1");//Event Handler Button for clicking
    var btn2Handler = document.getElementById("btn2");//Event Handler Button for clicking
    var btn3Listener = document.getElementById("btn3");//Event Listener Button for clicking
    var btn4Listener = document.getElementById("btn4");//Event Listener Button for clicking
	var btn5MultiListener = document.getElementById("btn5");//Multi-function Event Listener Button
	
	//Event Handlers
    btn1Handler.onclick = commandOne;
    btn2Handler.onclick = commandTwo;
	
	//Event Listeners
    btn3Listener.addEventListener("click", commandThree, false);
    btn4Listener.addEventListener("click", commandFour, false);
	
	//Multi-Function Event Listener
	btn5MultiListener.addEventListener("click", function() {
        winOrLose();
		commandFive();
	}, 
	false);
	
	/**************************************** 
	NAME: commandOne
	PURPOSE: Show the command one on the html page element
	PARAMETERS: none
	RETURN VALUE: none
	******************************************/
	function commandOne() {
        var elResponse = document.getElementById("command1");
		elResponse.innerHTML = "Throw 36 kilos of meat and pray for the kraken's blessings. Arrr!";
    }
    
    /**************************************** 
	NAME: commandTwo
	PURPOSE: Show the command two on the html page element
	PARAMETERS: none
	RETURN VALUE: none
	******************************************/
	function commandTwo() {
        var elResponse = document.getElementById("command2");
		elResponse.innerHTML = "Get 15 hooks n' invade their ship.";
    }
    
    /**************************************** 
	NAME: commandThree
	PURPOSE: Show the command three on the html page element
	PARAMETERS: none
	RETURN VALUE: none
	******************************************/
	function commandThree() {
        var elResponse = document.getElementById("command3");
		elResponse.innerHTML = "Steer the ship 25 degrees port!";
    }
    
    /**************************************** 
	NAME: commandFour
	PURPOSE: Show the command four on the html page element
	PARAMETERS: none
	RETURN VALUE: none
	******************************************/
	function commandFour() {
        var elResponse = document.getElementById("command4");
		elResponse.innerHTML = "Steered to 5 o'clock, now give 'em a good ol' broadside.";
	}

    /**************************************** 
	NAME: winOrLose
	PURPOSE: Show the alert message 
	PARAMETERS: none
	RETURN VALUE: none
	******************************************/
	function winOrLose() {
		alert("Let's see if we have won the battle after all this hard work")	
    }
    
    /**************************************** 
	NAME: commandFive
	PURPOSE: Show the command four on the html page element 
	PARAMETERS: none
	RETURN VALUE: none
	******************************************/
	function commandFive() {
		var elResponse = document.getElementById("command5");
		elResponse.innerHTML = "Arrrrgh, 15 cannons shot! Victory is ours, good job fellas!";
    }
    

}); 