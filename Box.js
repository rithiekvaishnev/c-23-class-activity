class Box {
    constructor(x,y,width, height){
        //Define all the properties of the object here
        var options = {
            restitution : 0.7
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }

    //Define other functions of the Box object here
    display(){


        push();  //save the previous screen setting
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill ("white");
        rect(0,0,this.width,this.height );
        pop(); //go back to the previous setting
    }

}