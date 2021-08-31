class childLog extends parentClass{
    constructor(x,y,height,angle) {
        super(x,y,10,height);
        this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body, angle);
    }
}