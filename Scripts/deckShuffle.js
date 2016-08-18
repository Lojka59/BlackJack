



// Часть переменных

var playerHand = [];
var dealerHand = [];


// Временно наполним колоду парой карт
var deck = []

//для доставания карты надо использовать 
//push - добавить в конец
//pop - убрать из конца

// Функция перемешивает текущую колоду
function shuffle() {
    for (var i = deck.length - 1; i > 0; i--) {
        var num = Math.floor(Math.random() * (i + 1));
        var d = deck[num];
        deck[num] = deck[i];
        deck[i] = d;
    };
    console.log("Колода отсортирована");
};
// Можно использовать и так и так
deck.shuffle = function(){ 
	shuffle();
};

// для отладки - посмотреть какой порядок элементов
deck.show = function show() {
for (var i = 0; i <= this.length-1; i++)
console.log(deck[i].name + " " + deck[i].color);
};

// Достать последнюю карту
deck.takeCard = function takeCard() {
return this.pop();
};

// Функция по обнулению колоды

deck.create = function create() {
  deck.splice(0);
  deck.push(
  {name: "A", color: "H", score: "11"},
  {name: "2", color: "H", score: "2"},
  {name: "3", color: "H", score: "3"},
  {name: "4", color: "H", score: "4"},
  {name: "5", color: "H", score: "5"},
  {name: "6", color: "H", score: "6"},
  {name: "7", color: "H", score: "7"},
  {name: "8", color: "H", score: "8"},
  {name: "9", color: "H", score: "9"},
  {name: "10", color: "H", score: "10"},
  {name: "J", color: "H", score: "10"},
  {name: "Q", color: "H", score: "10"},
  {name: "K", color: "H", score: "10"},
  {name: "A", color: "S", score: "11"},
  {name: "2", color: "S", score: "2"},
  {name: "3", color: "S", score: "3"},
  {name: "4", color: "S", score: "4"},
  {name: "5", color: "S", score: "5"},
  {name: "6", color: "S", score: "6"},
  {name: "7", color: "S", score: "7"},
  {name: "8", color: "S", score: "8"},
  {name: "9", color: "S", score: "9"},
  {name: "10", color: "S", score: "10"},
  {name: "J", color: "S", score: "10"},
  {name: "Q", color: "S", score: "10"},
  {name: "K", color: "S", score: "10"},
  {name: "A", color: "C", score: "11"},
  {name: "2", color: "C", score: "2"},
  {name: "3", color: "C", score: "3"},
  {name: "4", color: "C", score: "4"},
  {name: "5", color: "C", score: "5"},
  {name: "6", color: "C", score: "6"},
  {name: "7", color: "C", score: "7"},
  {name: "8", color: "C", score: "8"},
  {name: "9", color: "C", score: "9"},
  {name: "10", color: "C", score: "10"},
  {name: "J", color: "C", score: "10"},
  {name: "Q", color: "C", score: "10"},
  {name: "K", color: "C", score: "10"},
  {name: "A", color: "D", score: "11"},
  {name: "2", color: "D", score: "2"},
  {name: "3", color: "D", score: "3"},
  {name: "4", color: "D", score: "4"},
  {name: "5", color: "D", score: "5"},
  {name: "6", color: "D", score: "6"},
  {name: "7", color: "D", score: "7"},
  {name: "8", color: "D", score: "8"},
  {name: "9", color: "D", score: "9"},
  {name: "10", color: "D", score: "10"},
  {name: "J", color: "D", score: "10"},
  {name: "Q", color: "D", score: "10"},
  {name: "K", color: "D", score: "10"}
  );
};
// В начале есть полная колода
deck.create();


// Получить карту игроком

function cardPick(player, hide) {
// player = индекс игрока, 0 = крупье, 1 = игрок
// hide = Number. Количество карт, которые необходимо спрятать у крупье

switch (player) {
   case 0:
   		dealerHand.push(deck.takeCard());
   		cardRender(hide);
		console.log("Крупье взял карту");
    	break;
   case 1:
		playerHand.push(deck.takeCard());
		cardRender(hide);
		console.log("Игрок взял карту");
};
};
