class SlingShot {
    constructor(b1, p2){
        var options = {
            bodyA : b1,
            pointB : p2,
            stiffness : 0.05,
            length: 10,
        }
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = p2;
        World.add(myWorld, this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pos1 = this.sling.bodyA.position;
            var pos2 = this.pointB;

            push();
            strokeWeight(8);
            stroke("#311608");
            if(pos1<200){
                line(pos1.x-15, pos1.y,pos2.x-20,pos2.y+10);
                line(pos1.x+20, pos1.y,pos2.x+20,pos2.y+10);
                image(this.sling3,pos1.x,pos1.y,3,5);

            } else  {
                line(pos1.x-15, pos1.y,pos2.x-20,pos2.y+10);
                line(pos1.x+20, pos1.y,pos2.x+20,pos2.y+10);
                image(this.sling3,pos1.x,pos1.y,3,5);
            }
            
            pop();
        }
        
        image(this.sling1,200,247);
        image(this.sling2,175,247);
        
    }
    fly() {
        this.sling.bodyA = null;
    }
    attach(body) {
        this.sling.bodyA = body;
    }
}