let myButton = document.getElementById("myButton")

let type = ["♥", "♠︎", "♦︎", "♣︎"];
let cartas = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let colors = ["red", "black"]

function randomIndex (arr){

  let newIndex = Math.floor(Math.random() * arr.length);
  return arr[newIndex];

}

function getColorByType(arr) {

  return (arr === "♥" || arr === "♦︎") ? "red" : "black";

}

function GeneraUnaCarta () {
  
  let newType = randomIndex(type);
  let newNumber = randomIndex(cartas);
  let newColor = getColorByType(newType);


  document.querySelector("#topSymbol").innerHTML = newType;
  document.querySelector("#topSymbol").style.color = newColor;

  document.querySelector("#centerNumber").innerHTML = newNumber;
  document.querySelector("#centerNumber").style.color = newColor;

  document.querySelector("#bottomSymbol").innerHTML = newType;
  document.querySelector("#bottomSymbol").style.color = newColor;
};

window.onload = function() {

  GeneraUnaCarta ()

  document.querySelector("#generarCarta").addEventListener("click", GeneraUnaCarta);

  let interval = setInterval(GeneraUnaCarta, 5000);
  
}