//import * as EggModule from './Egg.js';
//import * as PopUpModule from './PopUp.js';
//import {Basket} from "./Basket.js";

console.log("Main.js loaded");
/*
let egg, basket, score, score_num;
let finished = false, instructions_vis = false, victory_msg_vis = false;
let eggs_dropped = 0;
const dir_btns = document.getElementsByClassName("dir_btn");



let victory_msg = document.createElement("div");
victory_msg.id = "victory_msg";
document.body.appendChild(victory_msg);
victory_msg.innerHTML = "YOU WON, CONGRATULATIONS";
victory_msg.style.visibility = "hidden";

let instructions = document.createElement("div");
instructions.id = "instructions";
document.body.appendChild(instructions);
instructions.innerHTML = "Use the arrow buttons or keyboard arrows to move the basket and catch the eggs! <br>\
            Collect 10 eggs to win the game! <br>\
            Press the start button to start the game.";

function component(width, height, color, x, y, type) 
{
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color; 
    }
    this.width = width;
    this.height = height;
    //this.isEgg = isEgg;
    //this.speedY = 1; //if the component is an egg, it should be moving down
    this.speedY = 0, this.speedX = 0; //initial speeds are 0
    this.x = x, this.y = y;  //set initial positions    
    this.newPos = function() 
    {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.update = function() 
    {
        ctx = game_area.context;
        if (type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } 
        else if (this.type == "text") {
          ctx.font = this.width + " " + this.height;
          ctx.fillStyle = color;
          ctx.fillText(this.text, this.x, this.y);
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

let game_area = {
    canvas : document.createElement("canvas"),
    start : function() {
      //set canvas sized
        this.canvas.width = 480; 
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 10);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    },
    detect_hits : function() 
    {
      if (finished) return; //exit the function if the game is finished
      score_board.text = "score: " + score_num;  
      if (score_num == 3){ //3 eggs collected, win condition met
        finish_game();
        finished = true; //exit the loop once the game is finished
      }
      //console.log("egg.y: " + egg.y + ", basket.y: " + basket.y + "score_num: " + score_num);
      //console.log("egg.x: " + egg.x + " basket.x: " + basket.x + " basket.width: " + basket.width);
      //score not 10 yet
      else if (egg.y >= basket.y) //egg is in basket height 
      {
        if (egg.x > basket.x && (egg.x + egg.width) < (basket.x + basket.width)) //egg is within the basket
        {
          score_num +=1;
          game_area.frameNo += 1;
           
        }
        if (egg.y == basket.y) //egg at the bottom, drop new egg
        {
          console.log("egg reached the bottom of the basket");
          if (score_num < 3) 
            drop_egg(); 
        }
      }
    }
    
}
function loadButtons(){
  document.getElementById("start_btn").addEventListener("click", startNewGame);
  document.getElementById("instructions_btn").addEventListener("click", showInstructions);
  document.getElementById("instructions_btn").addEventListener("touchstart", showInstructions);
  document.getElementById("start_btn").addEventListener("touchstart", startNewGame);
  document.getElementById("left").addEventListener("mousedown", moveLeft);
  document.getElementById("left").addEventListener("mouseup", stop);
  document.getElementById("left").addEventListener("touchstart", moveLeft);
  document.getElementById("right").addEventListener("mousedown", moveRight);
  document.getElementById("right").addEventListener("mouseup", stop);
  document.getElementById("right").addEventListener("touchstart", moveRight);
  document.getElementById("right").addEventListener("touchend", stop);
}
function loadGame(){
  loadButtons(); //ensure buttons are loaded when the game loads
//creating the objects initially
egg = new EggModule.Egg(Math.floor(Math.random() * 400),0,"red");
basket = new Basket(100, 185, "C:\\Users\\מיטב\\Desktop\\ליאור חפיפה\\classes\\assets\\basket.jpg");
score_board = new component("30px", "Consolas", "black", 280, 40, "text");

win_msg = new component(40,50,"red", 200, 400, "text");
score_num = 0; //initialize score to 0
//score.text = "score: " + score_num;
for (let i = 0; i < dir_btns.length; i++) {
    dir_btns[i].style.visibility = "hidden"; //hide buttons until game starts
}
//score.text.visibility="hidden";
game_area.start();
}

function startNewGame(){ //when user presses start/start again
  score_num = 0;
  finished = false;
  for (let i = 0; i < dir_btns.length; i++) {
    dir_btns[i].style.visibility = "visible";
  }
  hideInstructions();
  hideVictoryMessage();

  document.getElementById("win_msg").style.visibility = "hidden"; //hide victory msg at the start of the game
  score_board.text = "score: " + score_num;
  drop_egg();
}
function hideInstructions() 
{
  instructions.style.visibility = "hidden";
  instructions_visibility = false;
}
function showInstructions() 
{
  instructions.style.visibility = "visible";
  instructions_visibility = true;
}

function hideVictoryMessage() 
{
  document.getElementById("victory_msg").style.visibility = "hidden";
  victory_msg_vis = false;
}

function showVictoryMessage() 
{
  document.getElementById("victory_msg").style.visibility = "visible";
  victory_msg_vis = true;
}

function clickInstructions(vis) {
  if (vis) { showInstructions(); }
  else { hideInstructions();}
}


function drop_egg() //drop new egg
{ 
  let egg = new eggModule.Egg(Math.floor(Math.random() * 400),0,"red");
  eggs_dropped++;
  console.log("eggs_dropped: " + eggs_dropped); 
  egg.speedY = 2; //egg goes down
  return egg;
}

function enableNewGame(){
  document.getElementById("start_btn").style.visibility = "visible"; //allow new game
  document.getElementById("start_btn").innerHTML = "Play again!"
  document.getElementById("start_btn").disabled = false; 
}

function hideDirectionButtons(){
  for (let i = 0; i < dir_btns.length; i++) {
    dir_btns[i].style.visibility = "hidden";
  }
}

function finish_game(){ //called when user won
  showVictoryMessage();
  hideInstructions();
  document.getElementById("win_msg").style.visibility = "visible"; //show victory msg
  hideInstructions();
  enableNewGame();
  hideDirectionButtons();
}

function updateGameArea() 
{
    game_area.clear();
    game_area.detect_hits();
    score.text = "SCORE: " + score_num;
    if (game_area.keys && game_area.keys[37]) //left arrow key is pressed
      {
        moveLeft();
        stop();
      }
    if (game_area.keys && game_area.keys[39]) //right arrow key is pressed
      {
        moveRight();
        stop();
      }
    egg.update(), egg.newPos();
    basket.update(), basket.newPos();
    score.update();
}

window.addEventListener("load", loadGame);
*/