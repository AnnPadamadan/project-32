class polygon{
    constructor(x, y, r){
        var options= {
        isStatic: false,
        'density': 1.0
    }
        this.image =  loadImage("polygon.png");
this.x = x;
this.y = y;
this.r = r;

this.body = Bodies.circle(x, y, r, options);

World.add(world, this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //fill(random(0,255), random(0,255), random(0,255));
        //ellipseMode(CENTER);
       // ellipse(0, 0, this.r, this.r);
        imageMode(CENTER);
       image(this.image, 0, 0, this.r, this.r);
        
        
        pop();
    }
}