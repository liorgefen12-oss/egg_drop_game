class PopUp
{
    constructor(x, y, hit) 
    {
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.background_color = pop_up_colors[Math.floor(Math.random() * pop_up_colors.length)];
        this.width = 200;
        this.height = 400;
        this.text = hit ? pop_up_text_hit[Math.floor(Math.random() * pop_up_text_hit.length)] : pop_up_text_miss[Math.floor(Math.random() * pop_up_text_miss.length)];
        this.newPos = function() 
            {
                this.x += this.speedX;
                this.y += this.speedY;        
            }
        this.update = function() 
        {
            ctx = game_area.context;
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = this.background_color;
            ctx.fillText(this.text, this.x, this.y);
        }
        this.goUp = function() 
        {
            this.speedY = -1; 
            this.newPos();
        }
        this.pop = function(egg_x, egg_y,hit){
            let x = egg_x + Math.floor(Math.random() * 50);
            let y = egg_y + Math.floor(Math.random() * 50);
            let new_pop_up = new PopUp(x, y, hit);
            setTimeout(function() {new_pop_up = null;}, 3000); //disappears after 3 seconds
            setInterval(new_pop_up.goUp(), 1000); // moves the pop-up 
        }
    } 

pop_up_colors = ["#679ddb", "#73f073", "#d937ae", "#eded4c", "#e68a0b", "#c119c1"];
pop_up_text_hit = [ "awesome!", "good job!", "keep it up!", "amazing!" ,"well done!", "fantastic!", "excellent!", "brilliant!" ,"superb!" ];
pop_up_text_miss = [ "oops!", "try again!", "not quite!", "almost!" ,"keep trying!", "don't give up!", "better luck next time!", "so close!" ,"uh oh!" ];
}