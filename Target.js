class Target {
    constructor(x, y, width, height){
        var options = {
            'isStatic': true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.0
        }
        this.body = Matter.Bodies.rectangle(x, y, radius, options);
        this.radius = radius;
        
        World.add(world, this.body);
      }
  
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        pop()
      }  
    }
  }