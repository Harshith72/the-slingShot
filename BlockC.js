class BlockC{
    constructor(x, y, width, height){
        var options = {
            'isStatic': false
        }
  
        this.body   = Bodies.rectangle(x, y, width, height, options);
        this.width  = width;
        this.height = height;
  
        World.add(userWorld, this.body);
    }
  
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(1);
        stroke("green");
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
    }
  }