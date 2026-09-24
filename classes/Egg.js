export class Egg 
{
  constructor(x, y, src) 
  {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.src = src;
    this.width = 200;
    this.height = 400;
    this.newPos = function() 
        {
            this.x += this.speedX;
            this.y += this.speedY;        
        }
    this.update = function() 
        {
            ctx = game_area.context;
            ctx.drawImage(this.src, this.x, this.y, this.width, this.height);
        }
    }




}