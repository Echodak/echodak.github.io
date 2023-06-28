console.clear();

//Startwert für Coins festlegen
var coins = 100;

//Eine Variable für Gesamtpunktzahl festlegen
let score;

// Slot 1-3 anlegen und daklarieren
let slot1 = [
  10,
  20,
  30
];

let slot2 = [
  50,
  40,
  10
];

let slot3 = [
  60,
  10,
  30
];

// Füge Coins hinzu
function addCoins(x){
  coins = coins + x;
  
  if(coins>0){
    
  }
  
}
// Reduziert Punkte
function delCoins(x){
  coins = coins - x;

  if(coins>0){
    
  }else{
    
  }
 
}

// bestimmt die Bedinungen, wann man gewonnen hat.
function pruefeGewinner(){
  berechneSlotRandom();
  showData();
  if(slot1 == 10 && slot2 == 10 || slot2 == 10 && slot3 == 10 || slot1 == 10 && slot3 == 10)
  {
    addCoins(25);
    score = coins;
  }else if(slot1 == 10 && slot2 == 10 && slot3 == 10){
    addCoins(50);
  }else{
    delCoins(10);
    score = coins;
    // window.alert(score);
  }
}

function berechneSlotRandom() {
  // Random Wert aus der Arraylist rausgeben
  let randomNumber1 = slot1[Math.floor(Math.random()*slot1.length)];
  let randomNumber2 = slot2[Math.floor(Math.random()*slot2.length)];
  let randomNumber3 = slot3[Math.floor(Math.random()*slot3.length)];
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
  //output
  let o = document.getElementById('output');

}