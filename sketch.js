var database;
var player, form, game;

var gameState = 0;
var playerCount;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  

  if(playerCount===2){
  game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
}