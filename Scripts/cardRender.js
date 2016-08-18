// Показывает все карты в руке игрока или дилера
cardRender = function(dealer){ 
	switch(dealer) {
		case false:
			$("#playerHand").empty();
			for (n=0; n < playerHand.length; n++) {
				imgSource = "images/" + playerHand[n].name + playerHand[n].color + ".png";
					$("#playerHand").append("<img id=\"playerCard\" src=imgSource onerror=\"this.src='images/not_found.png'\">");
			}
			break;
		case true:
			$("#dealerHand").empty();
			for (n=0; n < dealerHand.length-1; n++) {
				imgSource = "images/" + dealerHand[n].name + dealerHand[n].color + ".png";
					$("#dealerHand").append("<img id=\"dealerCard\" src=imgSource onerror=\"this.src='images/not_found.png'\">");
			}
			$("#dealerHand").append("<img id=\"dealerCard\" src='images/back.png' onerror=\"this.src='images/not_found.png'\">");
			break;			
	};
};
