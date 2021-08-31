class childPig extends parentClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("sprites/enemy.png");
        this.visibility = 255;
    }
    display(){
        if(this.body.velocity.x<3){
            super.display();
        }else {
            World.remove(myWorld,this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            var pos = this.body.position;
            image(this.image,pos.x,pos.y,50,50);
            pop();
        }
    }
    score(){
        if(0>this.visibility && this.visibility>-500){
            console.log("before:"+score);
            score = score + 1;
            console.log("after:"+score);
            
        }
    }
}