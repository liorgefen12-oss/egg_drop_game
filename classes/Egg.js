class Egg 
{
  static egg_pictures_src = ["egg_drop_game/assets/egg1.png", "egg_drop_game/assets/egg2.png", "egg_drop_game/assets/egg3.png", "egg_drop_game/assets/egg4.png", "egg_drop_game/assets/egg5.png" , "egg_drop_game/assets/egg6.png", "egg_drop_game/assets/egg7.png"];

  constructor(x, y) 
  {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.src = Egg.egg_pictures_src[Math.floor(Math.random() * Egg.egg_pictures_src.length)];
    this.width = 200;
    this.height = 400;
    this.newPos = function() 
        {
            this.x += this.speedX;
            this.y += this.speedY;        
        }
    /*this.update = function() 
        {
            ctx = game_area.context;
            ctx.drawImage(this.src, this.x, this.y, this.width, this.height);
        } */
    }

    draw(ctx) {
        ctx.drawImage(this.src, this.x, this.y, this.width, this.height);
    }

}