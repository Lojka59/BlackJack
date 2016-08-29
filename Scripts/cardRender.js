// Показывает руки игрока и дилера 
// hide : Number. Скрыть данное количество карт у дилера (справа).
cardRenderOld = function(hide) { 
	hide = hide || 0;
	if (hide > dealerHand.length) hide = dealerHand.length;
	$(".hand").empty();
	for (var n = 0; n < playerHand.length; n++) {
		imgSource = "images/" + playerHand[n].name + playerHand[n].color + ".png";
			$("#playerHand").append("<img class=\"card\" id=\"playerCard\" src=imgSource onerror=\"this.src='images/not_found.png'\">");
	}
	for (n = 0; n < dealerHand.length - hide; n++) {
		imgSource = "images/" + dealerHand[n].name + dealerHand[n].color + ".png";
			$("#dealerHand").append("<img class=\"card\" id=\"dealerCard\" src=imgSource onerror=\"this.src='images/not_found.png'\">");
	}
	for (n = 0; n < hide; n++) {
		$("#dealerHand").append("<img class=\"card\" id=\"dealerCard\" src='images/back.png' onerror=\"this.src='images/not_found.png'\">");	
	}
}

// Новая версия с использованием спрайтов

cardRender = function(hide) { 
	hide = hide || 0;
	if (hide > dealerHand.length) hide = dealerHand.length;
	$(".hand").empty();
	for (var n = 0; n < playerHand.length; n++) {
		imgClass = playerHand[n].color + playerHand[n].name;
			$("#playerHand").append("<img class=\"card " + imgClass + "\" src=\"\">");
	}

	for (n = 0; n < dealerHand.length - hide; n++) {
		imgClass = dealerHand[n].color + dealerHand[n].name;
			$("#dealerHand").append("<img class=\"card " + imgClass + "\" src=\"\">");
	}
	for (n = 0; n < hide; n++) {
		$("#dealerHand").append("<img class=\"card back\" src=\"\">");	
	}
}

// Сбросить игру

resetGame = function() {
    // Вернем кнопки в исходное положение
//    $('#newGame').fadeTo(0, 0.5);
//    $('#more').hide();
//   $('#stop').hide();

    //Игровая логика
	$(".hand").empty();	
	dealerHand = [];
	playerHand = [];
	deck.create();
	shuffle();
	cardPick(0);
	cardPick(0);
	cardPick(1);
	cardPick(1, 1);
    // Как раздали карты проверяем, набрал ли игрок блекджек !
    if (checkPlayerWin()) {
        alert("BlackJack !!");
        endGame(); 
    };

}

// временная функция
function endGame() {
   $('#newGame').fadeTo(0, 0.5);
   jQuery.data(document.getElementById( "more" ), 'hidden', true);
   jQuery.data(document.getElementById( "stop" ), 'hidden', true);
   $('#more').stop(true, true).hide();
   $('#stop').stop(true, true).hide();
};




// Проверить, есть ли 17+ очков у дилера
function checkDealerSum () {
return true;
// Фрости напиши функцию
};


// Кнопка взять еще

function takeMore () {
    cardPick(1,1);
    if (checkPlayerFail()) {
        // Тут надо переписать потом
        alert("Лузер! Перебрал!");
        endGame();
        return false;
    }
console.log(this);
    if (checkPlayerWin()) {
        alert("BlackJack!!");
        // Тут надо переписать потом
        endGame(); 
    };
};


// Кнопка остановиться

function dealerTurn () {
  cardRender(0);
  while (!checkDealerSum()) {
    cardPick(0);
  };
  switch (findWinner()) {
    case -1:
      alert("Ничья");
      break
    case 0:
      alert("Победил дилер");
      break
    case 1:
      alert("Победил игрок");
    break
  };

};

// Управляет показом кнопок

$(document).ready(function() {
	$('#newGame').click(function () {
		$(this).fadeTo(0, 0.5);
		$(this).hide();
		$('#more').fadeTo(0, 0.5);
		$('#stop').fadeTo(0, 0.5);
		jQuery.data(this, 'hidden', true);
	});
	$('#stop').click(function () {
		$('#newGame').show();
		$('#more').hide();
		$(this).fadeTo(0, 0.5);
		$(this).hide();
		jQuery.data(this, 'hidden', true);
	});
	// Новый код
	$('.button').mouseover(function (){
		jQuery.data(this, 'hidden', false);
		$( this ).fadeTo( 200, 1 );
	});
	$('.button').mouseout(function (){
		if (jQuery.data(this, 'hidden') == false) {
		$(this).fadeTo(200, 0.5);}
	});
})
