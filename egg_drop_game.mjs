

var egg, basket, score, score_num;
var finished = false, instructions = false;
var eggs_dropped = 0;
const in01 = document.getElementById("in01");
const dir_btns = document.getElementsByClassName("dir_btn");

const egg_pictures_src = ["https://img.magnific.com/free-vector/green-spring-egg-painted_24877-83747.jpg?semt=ais_hybrid&w=740&q=80",
 "https://www.google.com/search?q=painted+egg+html&sca_esv=e7914123cf3b1be8&udm=2&biw=1280&bih=585&sxsrf=APpeQnuCnKSs-AeW9Q_jr2k7Rp1aw8XcNg%3A1790061788175&ei=3CyyaqKeCtOChbIPvL-RuQw&ved=2ahUKEwii_Ino04GXAxVTQUEAHbxfJMcQ4dUDegQIBhAN&uact=5&oq=painted+egg+html&gs_lp=Egtnd3Mtd2l6LWltZyIQcGFpbnRlZCBlZ2cgaHRtbEiwP1AAWOg8cAF4AJABAZgBzQGgAYETqgEGMC4xNC4xuAEDyAEA-AEBmAIMoALZDsICBxAjGMkCGCfCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIOEAAYgAQYigUYsQMYgwHCAgoQABiABBiKBRhDwgIFEAAYgATCAgcQABiABBgKwgIEEAAYHsICCBAAGAcYHhgTwgIHEAAYgAQYE8ICBhAAGAUYHsICBhAAGAgYHpgDAIgGAZIHBjEuMTAuMaAH7D6yBwYwLjEwLjG4B84OwgcGMi0xMC4yyAdKgAgB&sclient=gws-wiz-img#sv=CAMSXhoyKhBlLVBlN0d5OUVueXdfZ0RNMg5QZTdHeTlFbnl3X2dETToONjFCdEFPVkc2QWFLRU0gBCokCg5vclNhMWhSYXNyLWZoTRIQZS1QZTdHeTlFbnl3X2dETRgAMAEYByCcmdOqCUoIEAEYASABKAE", 
 "https://www.google.com/search?q=painted+egg+html&sca_esv=e7914123cf3b1be8&udm=2&biw=1280&bih=585&sxsrf=APpeQnuCnKSs-AeW9Q_jr2k7Rp1aw8XcNg%3A1790061788175&ei=3CyyaqKeCtOChbIPvL-RuQw&ved=2ahUKEwii_Ino04GXAxVTQUEAHbxfJMcQ4dUDegQIBhAN&uact=5&oq=painted+egg+html&gs_lp=Egtnd3Mtd2l6LWltZyIQcGFpbnRlZCBlZ2cgaHRtbEiwP1AAWOg8cAF4AJABAZgBzQGgAYETqgEGMC4xNC4xuAEDyAEA-AEBmAIMoALZDsICBxAjGMkCGCfCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIOEAAYgAQYigUYsQMYgwHCAgoQABiABBiKBRhDwgIFEAAYgATCAgcQABiABBgKwgIEEAAYHsICCBAAGAcYHhgTwgIHEAAYgAQYE8ICBhAAGAUYHsICBhAAGAgYHpgDAIgGAZIHBjEuMTAuMaAH7D6yBwYwLjEwLjG4B84OwgcGMi0xMC4yyAdKgAgB&sclient=gws-wiz-img#sv=CAMSXhoyKhBlLW9yU2ExaFJhc3ItZmhNMg5vclNhMWhSYXNyLWZoTToONjFCdEFPVkc2QWFLRU0gBCokCg5QZTdHeTlFbnl3X2dETRIQZS1vclNhMWhSYXNyLWZoTRgAMAEYByCKlJpcSggQARgBIAEoAQ",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GTwVD7bI1RC53WcAbHgbvylL2sXIRmKV4Bs05KDeUtS43kHCFGJGjWI&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxM2Px9HZv7BIP7mZGo0lwR6qr2c0RvqHdv9Dr1iv9GlEgshFiaf2J5kk&s=10"];

  function startGame(){
  /*creating the objects initially*/
    egg = new component(40, 50, "C:\\Users\\מיטב\\Desktop\\ליאור חפיפה\\egg.png", 10, 120, "image");
    basket = new component(150, 80, "C:\\Users\\מיטב\\Desktop\\ליאור חפיפה\\basket.jpg", 100, 185, "image");
    score = new component("30px", "Consolas", "black", 280, 40, "text");
    win_msg = new component(40,50,"red", 200, 400, "text");
    score_num = 0; //initialze score to 0
    //score.text = "score: " + score_num;
    for (let i = 0; i < dir_btns.length; i++) {
      dir_btns[i].style.visibility = "hidden"; //hide buttons until game starts
    }
    //score.text.visibility="hidden";
    game_area.start();
  }

var game_area = {
    canvas : document.createElement("canvas"),
    start : function() {
      //set canvas sized
        this.canvas.width = 480; 
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
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
      score.text = "score: " + score_num;  
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
          console.log("egg.y: " + egg.y + " basket.y: " + basket.y + "basket.height: " + basket.height);
          document.getElementById("start_btn").style.width +=100;
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
function drop_egg()
{ //drop new egg
  eggs_dropped++;
  console.log("eggs_dropped: " + eggs_dropped); 
  egg.speedY = 1; //egg goes down
  egg.y = 0; //starts at the top
  egg.x = Math.floor(Math.random() * 400); 
}
function start(){
  score_num = 0;
  finished = false;
  for (let i = 0; i < dir_btns.length; i++) {
    dir_btns[i].style.visibility = "visible";
  }
  document.getElementById("start_btn").style.visibility = "hidden";
  document.getElementById("instructions").style.visibility = "hidden";
  document.getElementById("win_msg").style.visibility = "hidden"; //hide victory msg at the start of the game
  score.text = "score: " + score_num;
  drop_egg();
}

function showInstructions() {
  if (instructions) {
    document.getElementById("instructions").style.visibility = "visible"; //show
    instructions = false; //change for next click
  }
  else {
    document.getElementById("instructions").style.visibility = "hidden";
    instructions = true;
  }
  
}

function finish_game(){
  //win_msg.text = "CONGRATULATIONS, YOU WON!";
  //win_msg.style.visibility = "visible";
  document.getElementById("win_msg").style.visibility = "visible"; //show victory msg
  document.getElementById("start_btn").style.visibility = "visible"; //allow new game
  document.getElementById("start_btn").innerHTML = "Play again!"
  document.getElementById("start_btn").disabled = false; 
  document.getElementById("instructions").style.visibility = "hidden";

  score.visibility = "hidden";
    for (let i = 0; i < dir_btns.length; i++) {
    dir_btns[i].style.visibility = "hidden";
  }

  
}

function moveRight() { basket.speedX = 2; }
function moveLeft() { basket.speedX = -2; }
function stop() { basket.speedX = 0; }



function hitDetection() 
{
  let x, y;
  if (score_num == 10){ //10 eggs collected, win condition met
    finish_game();
    return;
  }
  // until score = 10
  { 
    while (egg.y < 0 && egg.x)
    if (egg.y > basket.y) //egg is in basket height 
    {
      if (egg.x > basket.x && egg.x < (basket.x - basket.width)) //egg is within the basket
      {
        score_num ++;
        game_area.frameNo += 1;
        score.text = "score: " + count;
      }
    }
    x = Math.floor(Math.random() * 400);
    y = Math.floor(Math.random() * 200);
    egg = new component(30, 50, "red", x, y, "image");
    egg.image = egg_pictures_src[Math.floor(Math.random() * egg_pictures_src.length)]
  }
}


function updateGameArea() 
{
    game_area.clear();
    if(game_area.keys) //a key is pressed, event called
    {
      if (game_area.keys[37]) //left arrow pressed
        moveLeft();
      if (game_area.keys[39]) //right arrow pressed
        moveRight();
      stop(); //stop moving, only one step 
    }
    egg.update(), egg.newPos();
    basket.update(), basket.newPos();
    game_area.detect_hits();

    score.update();
    win_msg.update();
}
