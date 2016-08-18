// Показывает руки игрока и дилера (0 - показать все карты, 1 - скрыть последнюю карту дилера)
cardRender = function(hide) { 
	if (hide == null) hide = 0;
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
