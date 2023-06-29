console.clear();

//Startwert für Coins festlegen
let coins = 100;

//Eine Variable für Gesamtpunktzahl festlegen
let score;

// Globale Random variablen festlegen
let randomNumber1;
let randomNumber2;
let randomNumber3;

// Slot 1-3 anlegen
let slot1;
let slot2;
let slot3;

//Variablen für die Ausgabe anlegen
let out;
let o;
// Füge Coins hinzu
function addCoins(x){
  coins = coins + x;
  score = coins;
  
}
// Reduziert Punkte
function delCoins(x){

    coins = coins - x;
    score = coins; 
}

// bestimmt die Bedinungen, wann man gewonnen hat.
function pruefeGewinner(){
  if(coins <=0)
  {
    o.innerHTML = "Du hast alles verloren !!! ";
    coins = NULL;
  }else if(coins == 5)
  {
    o.innerHTML = "Du hast nicht genügend Coins !!! ";
    coins = NULL;
  }else if(slot1 == 20 && slot2 == 20 || slot2 == 20 && slot3 == 20 || slot1 == 20&& slot3 == 20)
  {
    out = "Du hast 15 Punkte gewonnen."
    addCoins(15);
  }else if(slot1 == 10 && slot2 == 10 || slot2 == 10 && slot3 == 10 || slot1 == 10 && slot3 == 10)
  {
    out = "Du hast 25 Punkte gewonnen."
    addCoins(25);
  }else if(slot1 == 30 && slot2 == 30 && slot3 == 30)
  {
    out = "Du hast 35 Punkte gewonnen."
    addCoins(35);
  }else if(slot1 == 10 && slot2 == 10 && slot3 == 10)
  {
    out = "Du hast 50 Punkte gewonnen."
    addCoins(50);
  }else{
    out = "Du hast 10 Punkte verloren."
    delCoins(10);
  }
}

function berechneSlotRandom() {
  // Mögliche Werte für Slot1 bis Slot3
  let slot = [
    10,
    20,
    30,
    40,
    50,
    60
  ];
  // Random Wert aus der Arraylist rausgeben
  randomNumber1 = slot[Math.floor(Math.random()*slot.length)];
  randomNumber2 = slot[Math.floor(Math.random()*slot.length)];
  randomNumber3 = slot[Math.floor(Math.random()*slot.length)];
  // den slots den Wert aus der Randomnumber zuweisen
  slot1 = randomNumber1;
  slot2 = randomNumber2;
  slot3 = randomNumber3;
}

function showData() {
  // Der Webseite den aktuellen Wert zuweisen
  //slot1
  let s1 = document.getElementById('slot1');
  s1.innerHTML = slot1;
  //slot2
  let s2 = document.getElementById('slot2');
  s2.innerHTML = slot2;
  //slot3
  let s3 = document.getElementById('slot3');
  s3.innerHTML = slot3;
  //punkte
  let sc = document.getElementById('points');
  sc.innerHTML = score;
  //Ausgabe
  o = document.getElementById('output');
  o.innerHTML = out;

}
