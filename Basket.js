export class Basket {
    constructor(x, y, src) 
    {
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
      this.src = src;
      this.width = 200;
      this.height = 400;
      this.stop = function() { this.speedX = 0; }
      this.moveRight = function() { this.speedX = 2; 
        if (this.x + this.width > game_area.canvas.width) 
          this.moveLeft();
      }
      this.moveLeft = function() { 
        this.speedX = -2; 
        if (this.x < 0 ) 
          this.moveRight();
      }
      this.newPos = function() 
        {
            this.x += this.speedX;
            this.y += this.speedY;        
        }
      this.update = function() 
        {
            let ctx = game_area.context;
            ctx.drawImage(this.src, this.x, this.y, this.width, this.height);
        }
    }
}
