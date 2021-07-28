class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

        World.add(world, this.body);
  }

   display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  life(){
    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";
    push()
    fill(this.life1)
    rect(width-230,50,100,50);
    fill(this.life2)
    rect(width-330,50,100,50);
    fill(this.life3)
    rect(width-430,50,100,50);
    pop()
  }
}
