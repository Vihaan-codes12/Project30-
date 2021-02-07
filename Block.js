class Block{
    constructor(x, y, width, height) {
      var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility = 255;
      }
      display()
      {
        console.log(this.body.speed);
        if(this.body.speed < 3){
          this.body.display();
        }
        else {
          World.remove(world, this.body);
          push();
          this.Visibility = -5; 
          tint(255, this.Visibility);
          pop();
        }
      }
}