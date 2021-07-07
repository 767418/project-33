class Snow {
    constructor (x, y, radius) {
        var options={
            friction:1.0,
            restitution:0.5
        }
        
        this.body=Bodies.circle(x, y, radius, options);
        this.radius=radius;
        this.image1=loadImage("snow4.webp");
        this.image2=loadImage("snow5.webp");
        World.add(world, this.body);

        this.whichSnow=Math.round(random(1,2));
        console.log(this.whichSnow);
    }


    display() {
        
        if (this.whichSnow === 1) {
            image(this.image1, this.body.position.x, this.body.position.y, this.radius*2, this.radius*2);
        } else if (this.whichSnow === 2) { 
            image(this.image2, this.body.position.x, this.body.position.y, this.radius*2, this.radius*2);
        }
        

        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
    }
}