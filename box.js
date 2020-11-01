class Box {
    constructor(x, y, width, height) {
      var options = {
         friction : 0.1,
         density : 1.0
      }

      this.Visibilty = 255;

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.image = loadImage("wood1.png");
      
      World.add(world, this.body);
    }
    
    score(){

      if (this.Visibilty<0 && this.Visibilty>-105){
    
        score++;
      }
    }
    
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      imageMode(CENTER);
      //fill("red");
     if (this.body.speed < 3){
      image(this.image, pos.x, pos.y, this.width, this.height);
     }
     else {
       World.remove(world,this.body);
       push();
       this.Visibilty = this.Visibilty- 5;
       tint(255,this.Visibilty);
       image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
       pop();

      }
    }
}