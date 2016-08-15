// Показывает все карты в руке игрока
cardRender = function(){ 
	for (n=0; n < playerHand.length; n++) {
		imgSource = "images/" + playerHand[n].name + playerHand[n].color + ".png";	
		document.write("<img id=\"playerCard\" src=imgSource onerror=\"this.src='images/not_found.png'\">");
	}
};
