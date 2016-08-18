// Показывает руки игрока и дилера 
// hide : Number. Скрыть данное количество карт у дилера (справа).
cardRender = function(hide) { 
	hide = hide || 0;
	if (hide > dealerHand.length) hide = dealerHand.length;
	$(".hand").empty();
	for (var n = 0; n < playerHand.length; n++) {
		imgSource = "images/" + playerHand[n].name + playerHand[n].color + ".png";
			$("#playerHand").append("<img id=\"playerCard\" src=imgSource onerror=\"this.src='images/not_found.png'\">");
	}
	for (n = 0; n < dealerHand.length - hide; n++) {
		imgSource = "images/" + dealerHand[n].name + dealerHand[n].color + ".png";
			$("#dealerHand").append("<img id=\"dealerCard\" src=imgSource onerror=\"this.src='images/not_found.png'\">");
	}
	for (n = 0; n < hide; n++) {
		$("#dealerHand").append("<img id=\"dealerCard\" src='images/back.png' onerror=\"this.src='images/not_found.png'\">");	
	}
}
