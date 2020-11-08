class Box{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.shapeColor("green");
      Matter.Body.setAngle(this.body, angle);
    }
  }

  if (velocityX > 3){
      box1.visibilty = false;
      tint(255,26);
  }

  push();
  pop();
  