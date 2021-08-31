class childBird extends parentClass {
    constructor(x,y) {
        super(x,y,40,40);
        this.image = loadImage("sprites/bird.png");
        this.smokeImage = loadImage("sprites/smoke.png");
        this.pattern = [];
    }

    display() {
        // this.body.position.x = mouseX;
        // this.body.position.y = mouseY;
        super.display();
        if(this.body.position.x>200 && this.body.velocity.x>10){
            var position = [this.body.position.x,this.body.position.y];
            this.pattern.push(position);
        }

        for(var x = 0; x < this.pattern.length; x = x+1){
            image(this.smokeImage, this.pattern[x][0],this.pattern[x][1]);
        }
    }
}