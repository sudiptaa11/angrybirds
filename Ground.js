class Ground {
    constructor(x,y,width,height){

        var options = {
            isStatic: true
        }
        this.groundBody = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(myWorld, this.groundBody);
    }
    display() {
        var pos = this.groundBody.position;
        rectMode(CENTER);
        push()
        fill("brown");
        rect(pos.x, pos.y, this.w, this.h);
        pop()
    }
}