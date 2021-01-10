class Paper{
    constructor(x,y,radius){


        var options = {
            restitution : 0.5,
            density: 0.8,
            friction: 0.8
         }
    
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.radius = radius;
        

    }


    display(){

        var pos = this.body.position;

        fill("red")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);

        
    }

}
